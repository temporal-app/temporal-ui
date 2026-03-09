import urllib.request
import re
import os

icons = ['AudioWaveform', 'BadgeCheck', 'Bell', 'BookOpen', 'Bot', 'CheckIcon', 'ChevronDown', 'ChevronLeft', 'ChevronRight', 'ChevronUp', 'ChevronsUpDown', 'CircleCheck', 'CircleX', 'Command', 'CreditCard', 'Folder', 'Forward', 'Frame', 'GalleryVerticalEnd', 'Info', 'LogOut', 'MapIcon', 'MoreHorizontal', 'PanelLeft', 'PieChart', 'Plus', 'Settings2', 'Sparkles', 'SquareTerminal', 'Trash2', 'TriangleAlert', 'UserIcon', 'X', 'XIcon', 'Banana', 'DollarSign', 'AtSign', 'ChevronDownIcon', 'UserPlus', 'UsersIcon', 'Settings', 'AlignCenterIcon', 'AlignLeftIcon', 'AlignRightIcon', 'BoldIcon', 'ItalicIcon', 'UnderlineIcon', 'ArrowRight', 'Trash', 'CalendarIcon', 'AlarmClockCheck', 'Mail']

def to_kebab_case(s):
    if s == 'Settings2': return 'settings-2'
    if s == 'Trash2': return 'trash-2'
    # Keep MapIcon -> map, CheckIcon -> check, UserIcon -> user, XIcon -> x, CalendarIcon -> calendar
    if s == 'MapIcon': return 'map'
    if s == 'CheckIcon': return 'check'
    if s == 'UserIcon': return 'user'
    if s == 'XIcon': return 'x'
    if s == 'CalendarIcon': return 'calendar'
    if s == 'ChevronDownIcon': return 'chevron-down'
    if s == 'UsersIcon': return 'users'
    if s == 'AlignCenterIcon': return 'align-center'
    if s == 'AlignLeftIcon': return 'align-left'
    if s == 'AlignRightIcon': return 'align-right'
    if s == 'BoldIcon': return 'bold'
    if s == 'ItalicIcon': return 'italic'
    if s == 'UnderlineIcon': return 'underline'

    s = s.replace('Icon', '')
    s = re.sub('([a-z0-9])([A-Z])', r'\1-\2', s).lower()
    return s

def fetch_svg(icon):
    kebab = to_kebab_case(icon)
    url = f"https://unpkg.com/lucide-static@latest/icons/{kebab}.svg"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req)
        svg = response.read().decode('utf-8')
        return svg
    except Exception as e:
        print(f"Failed to fetch {icon} ({kebab}): {e}")
        return None

react_icons_content = "import React, { type ComponentProps } from 'react';\n\nexport type IconProps = ComponentProps<'svg'>;\n\n"
solid_icons_content = "import type { ComponentProps } from 'solid-js';\n\nexport type IconProps = ComponentProps<'svg'>;\n\n"

for icon in sorted(list(set(icons))):
    svg = fetch_svg(icon)
    if not svg: continue

    # common cleanups
    svg = re.sub(r'xmlns="[^"]+"', '{...props} xmlns="http://www.w3.org/2000/svg"', svg)

    # React specific
    react_svg = svg
    react_svg = react_svg.replace('class="lucide', 'className="lucide')
    react_svg = react_svg.replace('stroke-width', 'strokeWidth')
    react_svg = react_svg.replace('stroke-linecap', 'strokeLinecap')
    react_svg = react_svg.replace('stroke-linejoin', 'strokeLinejoin')
    react_svg = react_svg.replace('fill-rule', 'fillRule')
    react_svg = react_svg.replace('clip-rule', 'clipRule')
    react_svg = re.sub(r'className="lucide lucide-[^"]+"', 'className={props.className}', react_svg)
    react_svg = react_svg.replace('{...props} xmlns="http://www.w3.org/2000/svg"', 'xmlns="http://www.w3.org/2000/svg" {...props}')

    react_match = re.search(r'(<svg[^>]*>.*</svg>)', react_svg, re.DOTALL)
    if react_match:
        react_icons_content += f"export const {icon} = (props: IconProps) => (\n  {react_match.group(1)}\n);\n\n"

    # Solid specific
    solid_svg = svg
    solid_svg = solid_svg.replace('{...props} xmlns="http://www.w3.org/2000/svg"', 'xmlns="http://www.w3.org/2000/svg" {...props}')
    solid_svg = re.sub(r'class="lucide lucide-[^"]+"', 'class={props.class}', solid_svg)

    solid_match = re.search(r'(<svg[^>]*>.*</svg>)', solid_svg, re.DOTALL)
    if solid_match:
        solid_icons_content += f"export const {icon} = (props: IconProps) => (\n  {solid_match.group(1)}\n);\n\n"

with open("./packages/react/src/components/icons.tsx", "w") as f:
    f.write(react_icons_content)

with open("./packages/solid/src/components/icons.tsx", "w") as f:
    f.write(solid_icons_content)

print("Generated icon files for React and Solid")
