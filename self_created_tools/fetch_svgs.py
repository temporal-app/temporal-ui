import urllib.request
import re

def to_kebab_case(s):
    # e.g., CheckIcon -> check, ChevronDown -> chevron-down, XIcon -> x
    s = s.replace('Icon', '')
    s = re.sub('([a-z0-9])([A-Z])', r'\1-\2', s).lower()
    return s

icons = ['AudioWaveform', 'BadgeCheck', 'Bell', 'BookOpen', 'Bot', 'CheckIcon', 'ChevronDown', 'ChevronLeft', 'ChevronRight', 'ChevronUp', 'ChevronsUpDown', 'CircleCheck', 'CircleX', 'Command', 'CreditCard', 'Folder', 'Forward', 'Frame', 'GalleryVerticalEnd', 'Info', 'LogOut', 'MapIcon', 'MoreHorizontal', 'PanelLeft', 'PieChart', 'Plus', 'Settings2', 'Sparkles', 'SquareTerminal', 'Trash2', 'TriangleAlert', 'UserIcon', 'X', 'XIcon']

# Some names might be different.
# MapIcon -> map
# UserIcon -> user
# XIcon -> x
# CheckIcon -> check

for icon in icons:
    if not icon: continue
    kebab = to_kebab_case(icon)
    try:
        url = f"https://unpkg.com/lucide-static@latest/icons/{kebab}.svg"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        response = urllib.request.urlopen(req)
        svg = response.read().decode('utf-8')
        print(f"Fetched {kebab} ({len(svg)} bytes)")
    except Exception as e:
        print(f"Failed to fetch {icon} ({kebab}): {e}")
