import re

file = './packages/react/src/components/icons.tsx'
with open(file, 'r') as f:
    content = f.read()

content = content.replace("import React, { type ComponentProps } from 'react';", "import type { ComponentProps } from 'react';")

with open(file, 'w') as f:
    f.write(content)
