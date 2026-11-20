// Naive UI overrides that map the design tokens onto component variables.
// Dark backgrounds only use the approved palette: #000000 #181818 #1F1F1F #272727 #313131 #131209.
const font = "'Geist', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
const mono = "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace"

const common = {
  fontFamily: font,
  fontFamilyMono: mono,
  fontSize: '16px',
  fontSizeMedium: '16px',
  fontSizeSmall: '14px',
  fontSizeTiny: '12px',
  fontSizeLarge: '18px',
  fontSizeHuge: '20px',
  fontWeight: '400',
  fontWeightStrong: '600',
  borderRadius: '8px',
  borderRadiusSmall: '6px',
  cubicBezierEaseInOut: 'cubic-bezier(0.22, 1, 0.36, 1)',
  cubicBezierEaseOut: 'cubic-bezier(0.22, 1, 0.36, 1)',
  cubicBezierEaseIn: 'cubic-bezier(0.22, 1, 0.36, 1)',
}

export const buildThemeOverrides = (isDark) => {
  const components = {
    Button: { fontWeight: '600', paddingMedium: '0 12px', heightMedium: '40px', borderRadiusMedium: '8px' },
    Card: { borderRadius: '12px', paddingMedium: '16px 24px' },
    Input: { borderRadius: '8px' },
    Tag: { borderRadius: '6px' },
    Modal: { borderRadius: '12px' },
    Tabs: { tabFontWeightActive: '600' },
  }
  if (!isDark) {
    return {
      common: { ...common, primaryColor: '#131209', primaryColorHover: '#313131', primaryColorPressed: '#000000', primaryColorSuppl: '#313131' },
      Button: components.Button, Card: components.Card, Input: components.Input, Tag: components.Tag, Modal: components.Modal, Tabs: components.Tabs,
    }
  }
  return {
    common: {
      ...common,
      primaryColor: '#ffffff', primaryColorHover: '#9b9b9b', primaryColorPressed: '#9b9b9b', primaryColorSuppl: '#ffffff',
      bodyColor: '#000000', cardColor: '#181818', modalColor: '#181818', popoverColor: '#1F1F1F',
      tableColor: '#181818', inputColor: '#1F1F1F', actionColor: '#1F1F1F', borderColor: '#313131', dividerColor: '#313131',
    },
    Button: { ...components.Button, textColorPrimary: '#000000', textColorHoverPrimary: '#000000', textColorPressedPrimary: '#000000', textColorFocusPrimary: '#000000' },
    Card: components.Card, Input: components.Input, Tag: components.Tag, Modal: components.Modal, Tabs: components.Tabs,
    Layout: { color: '#000000', headerColor: '#000000', siderColor: '#181818' },
  }
}
