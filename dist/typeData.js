export default {
  "ButtonProps": [
    {
      "optional": "true",
      "name": "stretch",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮是否跟随父容器拉伸",
            "defaultValue": "false"
          },
          "en-US": {
            "language": "en-US",
            "description": "Does the button follow the parent container stretch?",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮是否禁用",
            "defaultValue": "false"
          },
          "en-US": {
            "language": "en-US",
            "description": "Is the button disabled?",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "size",
      "types": "'large' | 'normal' | 'small' | 'noSet' | number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮背景尺寸，默认为 noSet。large: 48, normal: 40, small: 32。",
            "defaultValue": "'noSet'"
          },
          "en-US": {
            "language": "en-US",
            "description": "Button background size, the default is `noset`. large: 48, normal: 40, small: 32.",
            "defaultValue": "'noSet'"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "type",
      "types": "'primary' | 'normal'",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮背景类型。normal：背景色为transparent；若为primary：则跟随主色",
            "defaultValue": "'normal'"
          },
          "en-US": {
            "language": "en-US",
            "description": "Button background type. normal: the background color is transparent; primary: it follows the main color",
            "defaultValue": "'normal'"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "background",
      "types": "BackgroundProps",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮背景，可为颜色值或渐变值",
            "types": "string | <a target=\"_blank\" href=\"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/theme.d.ts#L6\">LinearGradientBackground</a> | <a target=\"_blank\" href=\"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/theme.d.ts#L14\">RadialGradientBackground</a>",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Button background, can be color value or gradient value",
            "types": "string | <a target=\"_blank\" href=\"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/theme.d.ts#L6\">LinearGradientBackground</a> | <a target=\"_blank\" href=\"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/theme.d.ts#L14\">RadialGradientBackground</a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "text",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮内的文字内容",
            "defaultValue": "''"
          },
          "en-US": {
            "language": "en-US",
            "description": "Text content in the button",
            "defaultValue": "''"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "textSingleLine",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮内的文字是否只显示一行，即超出显示省略号",
            "defaultValue": "true"
          },
          "en-US": {
            "language": "en-US",
            "description": "Does the text in the button display only one line, that is, beyond the ellipsis",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "textDirection",
      "types": "'left' | 'top' | 'right' | 'bottom' | 'center'",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮内的文字排列方向，默认放置文字位于按钮底部",
            "defaultValue": "'bottom'"
          },
          "en-US": {
            "language": "en-US",
            "description": "The text arrangement direction within the button. The default placement text is at the bottom of the button",
            "defaultValue": "'bottom'"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "icon",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮内的图标名称",
            "defaultValue": "undefined"
          },
          "en-US": {
            "language": "en-US",
            "description": "Icon name inside the button",
            "defaultValue": "undefined"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "iconPath",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮内的图标路径",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Icon path within the button",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "iconSize",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮内的图标尺寸",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Icon size in button",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "iconColor",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮内的图标颜色",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "The color of the icon within the button",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "image",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮内的图片资源路径",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "The path of image resources in the button",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "imageColor",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮内的图片颜色",
            "defaultValue": "null"
          },
          "en_US": {
            "language": "en_US",
            "description": "The color of the image inside the button",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "imageStyle",
      "types": "StyleProp<ImageStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮内的图片样式",
            "types": "<a target=\"_blank\" href=\"https://reactnative.dev/docs/image-style-props\">StyleProp<ImageStyle></a>",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "The image style inside the button",
            "types": "<a target=\"_blank\" href=\"https://reactnative.dev/docs/image-style-props\">StyleProp<ImageStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "badgeText",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "徽标字体内容，即按钮右上角徽标",
            "defaultValue": "''"
          },
          "en-US": {
            "language": "en-US",
            "description": "Logo font content, that is, the logo in the upper right corner of the button",
            "defaultValue": "''"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "disabledOpacity",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮内容的禁用透明度比例",
            "defaultValue": "0.2"
          },
          "en-US": {
            "language": "en-US",
            "description": "Disable transparency scale for button content",
            "defaultValue": "0.2"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮的样式",
            "types": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          },
          "en-US": {
            "language": "en-US",
            "description": "The style of the button",
            "types": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "wrapperStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "最外层容器的样式",
            "types": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          },
          "en-US": {
            "language": "en-US",
            "description": "The style of the outermost container",
            "types": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "border",
      "types": "string | boolean | number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮背景的边框值，安卓有瑕疵，暂时不用",
            "defaultValue": "true"
          },
          "en-US": {
            "language": "en-US",
            "description": "The border value of the button background is defective on Android. It is not used for the time being",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "textStyle",
      "types": "StyleProp<TextStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮内字体样式",
            "types": "<a target=\"_blank\" href=\"https://reactnative.dev/docs/text-style-props\">StyleProp<TextStyle></a>",
            "defaultValue": "{}"
          },
          "en-US": {
            "language": "en-US",
            "description": "Font style in button",
            "types": "<a target=\"_blank\" href=\"https://reactnative.dev/docs/text-style-props\">StyleProp<TextStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "badgeStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮内徽标容器的样式",
            "types": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          },
          "en-US": {
            "language": "en-US",
            "description": "The style of the logo container inside the button",
            "types": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "badgeTextStyle",
      "types": "StyleProp<TextStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "按钮内徽标字体的样式",
            "types": "<a target=\"_blank\" href=\"https://reactnative.dev/docs/text-style-props\">StyleProp<TextStyle></a>",
            "defaultValue": "{}"
          },
          "en-US": {
            "language": "en-US",
            "description": "The style of the logo font within the button",
            "types": "<a target=\"_blank\" href=\"https://reactnative.dev/docs/text-style-props\">StyleProp<TextStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "useART",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "defaultValue": "false"
          },
          "en-US": {
            "language": "en-US",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "textAccessibilityLabel",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "测试标识",
            "defaultValue": "'Button_Text'"
          },
          "en-US": {
            "language": "en-US",
            "description": "Test identification",
            "defaultValue": "'Button_Text'"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "badgeAccessibilityLabel",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "测试标识",
            "defaultValue": "'Button_Badge'"
          },
          "en-US": {
            "language": "en-US",
            "description": "Test identification",
            "defaultValue": "'Button_Badge'"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "badgeTextAccessibilityLabel",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "测试标识",
            "defaultValue": "'Button_Badge_Text'"
          },
          "en-US": {
            "language": "en-US",
            "description": "Test identification",
            "defaultValue": "'Button_Badge_Text'"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "theme",
      "types": "{  fontSize?: number;  fontColor?: string;  iconSize?: number;  bgWidth?: number;  bgHeight?: number;  bgColor?: string;  margin?: number[];  iconColor?: string;  bgRadius?: number;}",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "主题配置",
            "defaultValue": "{}"
          },
          "theme": {
            "language": "theme",
            "description": "Theme configuration",
            "defaultValue": "{}"
          }
        }
      }
    }
  ],
  "BrickButtonProps": [
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "style": {
            "language": "style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "onPress",
      "types": "(event: GestureResponderEvent) => void",
      "meta": {
        "base": {},
        "i18n": {
          "onPress": {
            "language": "onPress",
            "type": "(event: <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>GestureResponderEvent</a>) => void",
            "defaultValue": "() => {}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "onChange",
      "types": "(eventName: string, ...args: any) => void",
      "meta": {
        "base": {},
        "i18n": {
          "onChange": {
            "language": "onChange",
            "type": "(eventName: string, ...args: any) => void",
            "defaultValue": "() => {}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "loading",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "loading": {
            "language": "loading",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "text",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "text": {
            "language": "text",
            "type": "string",
            "defaultValue": "''"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "textStyle",
      "types": "StyleProp<TextStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "textStyle": {
            "language": "textStyle",
            "type": "<a target=\"_blank\" href=\"https://reactnative.dev/docs/text-style-props\">StyleProp<TextStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "type",
      "types": "'primary' | 'primaryGradient' | 'primaryBorder' | 'normal' | 'small'",
      "meta": {
        "base": {},
        "i18n": {
          "type": {
            "language": "type",
            "type": "\"primary\" | \"primaryGradient\" | \"primaryBorder\" | \"normal\" | \"small\"",
            "defaultValue": "\"primary\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "wrapperStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "wrapperStyle": {
            "language": "wrapperStyle",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "backgroundColorTouched",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "backgroundColorTouched": {
            "language": "backgroundColorTouched",
            "type": "string",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "disabled": {
            "language": "disabled",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "underlayColor",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "underlayColor": {
            "language": "underlayColor",
            "type": "string",
            "defaultValue": "'transparent'"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "activeOpacity",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "activeOpacity": {
            "language": "activeOpacity",
            "type": "number",
            "defaultValue": "1"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "showUnderlay",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "showUnderlay": {
            "language": "showUnderlay",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "loadingColor",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "loadingColor": {
            "language": "loadingColor",
            "type": "string",
            "defaultValue": "'#fff'"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "loadingBackground",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "loadingBackground": {
            "language": "loadingBackground",
            "type": "string",
            "defaultValue": "'rgba(0,0,0,.1)'"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "loadingSize",
      "types": "('small' | 'large') | number",
      "meta": {
        "base": {},
        "i18n": {
          "loadingSize": {
            "language": "loadingSize",
            "type": "(\"small\" | \"large\") | number",
            "defaultValue": "\"small\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "loadingStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "loadingStyle": {
            "language": "loadingStyle",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "loadingStrokeWidth",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "loadingStrokeWidth": {
            "language": "loadingStrokeWidth",
            "type": "number",
            "defaultValue": "cx(2)"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "background",
      "types": "BackgroundProps",
      "meta": {
        "base": {},
        "i18n": {
          "background": {
            "language": "background",
            "type": "string | <a target=\"_blank\" href=\"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/theme.d.ts#L6\">LinearGradientBackground</a> | <a target=\"_blank\" href=\"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/theme.d.ts#L14\">RadialGradientBackground</a>",
            "defaultValue": "{ x1: '0%', y1: '0%', x2: '0%', y2: '100%', stops: { '0%': 'red', '30%': 'blue', '100%': 'yellow' }}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "theme",
      "types": "{  fontSize?: number;  fontColor?: string;  bgRadius?: number;  bgHeight?: number;  bgWidth?: number;  margin?: number[];  padding?: number[];  bgColor?: string;  bgBorder?: string;  bgBorderWidth?: number;  loadingColor?: string;  loadingBackground?: string;}",
      "meta": {
        "base": {},
        "i18n": {
          "theme": {
            "language": "theme",
            "type": "{ fontSize: number; fontColor: string; bgRadius: number; bgHeight: number; bgWidth: number; margin: number[]; padding: number[]; bgColor: string; bgBorder: string; bgBorderWidth: number; loadingColor: string; loadingBackground: string }",
            "defaultValue": "{}"
          }
        }
      }
    }
  ],
  "CarouselProps": [
    {
      "optional": "true",
      "name": "accessibilityLabel",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "accessibilityLabel": {
            "language": "accessibilityLabel",
            "type": "string",
            "defaultValue": "\"Carousel\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "bounces",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "bounces": {
            "language": "bounces",
            "type": "boolean",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "hasDots",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "hasDots": {
            "language": "hasDots",
            "type": "boolean",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "autoplay",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "autoplay": {
            "language": "autoplay",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "autoplayInterval",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "autoplayInterval": {
            "language": "autoplayInterval",
            "type": "number",
            "defaultValue": "2000"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "selectedIndex",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "selectedIndex": {
            "language": "selectedIndex",
            "type": "number",
            "defaultValue": "0"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "dots",
      "types": "React.ElementType | ((params: {  dotStyle: StyleProp<ViewStyle>;  dotWrapperStyle: StyleProp<ViewStyle>;  dotActiveStyle: StyleProp<ViewStyle>;  currentIndex: number;  count: number;}) => React.ReactNode)",
      "meta": {
        "base": {},
        "i18n": {
          "dots": {
            "language": "dots",
            "type": "React.ElementType |  ((params: {",
            "defaultValue": "<a target=\"_blank\" href=\"https://github.com/tuya/tuya-panel-kit/blob/master/src/components/carousel/dot.js#L33\">defaultDot</a>"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "dotStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "dotStyle": {
            "language": "dotStyle",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "dotActiveStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "dotActiveStyle": {
            "language": "dotActiveStyle",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "pageStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "pageStyle": {
            "language": "pageStyle",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "useViewPagerOnAndroid",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "useViewPagerOnAndroid": {
            "language": "useViewPagerOnAndroid",
            "type": "boolean",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "loop",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "loop": {
            "language": "loop",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "dotWrapperStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "dotWrapperStyle": {
            "language": "dotWrapperStyle",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "style": {
            "language": "style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "carouselChange",
      "types": "(index: number) => void",
      "meta": {
        "base": {},
        "i18n": {
          "carouselChange": {
            "language": "carouselChange",
            "type": "(index: number) => void",
            "defaultValue": "() => {}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "onScrollEndDrag",
      "types": "(event: NativeSyntheticEvent<NativeScrollEvent>, state: any) => void",
      "meta": {
        "base": {},
        "i18n": {
          "onScrollEndDrag": {
            "language": "onScrollEndDrag",
            "type": "( event: <a target=\"_blank\" href=\"https://reactnative.dev/docs/0.60/scrollview#onscroll\">NativeSyntheticEvent<NativeScrollEvent></a>, state: any ) => void",
            "defaultValue": "() => {}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "onMomentumScrollEnd",
      "types": "(event: NativeSyntheticEvent<NativeScrollEvent>, state: any) => void",
      "meta": {
        "base": {},
        "i18n": {
          "onMomentumScrollEnd": {
            "language": "onMomentumScrollEnd",
            "type": "( event: <a target=\"_blank\" href=\"https://reactnative.dev/docs/0.60/scrollview#onscroll\">NativeSyntheticEvent<NativeScrollEvent></a>, state: any ) => void",
            "defaultValue": "() => {}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "onScrollBeginDrag",
      "types": "(event: NativeSyntheticEvent<NativeScrollEvent>, state: any) => void",
      "meta": {
        "base": {},
        "i18n": {
          "onScrollBeginDrag": {
            "language": "onScrollBeginDrag",
            "type": "( event: <a target=\"_blank\" href=\"https://reactnative.dev/docs/0.60/scrollview#onscroll\">NativeSyntheticEvent<NativeScrollEvent></a>, state: any ) => void",
            "defaultValue": "() => {}"
          }
        }
      }
    }
  ],
  "CheckboxProps": [
    {
      "optional": "true",
      "name": "accessibilityLabel",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "accessibilityLabel": {
            "language": "accessibilityLabel",
            "type": "string",
            "defaultValue": "\"Checkbox\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "style": {
            "language": "style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "size",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "size": {
            "language": "size",
            "type": "number",
            "defaultValue": "17"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "disabled": {
            "language": "disabled",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "disabledColor",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "disabledColor": {
            "language": "disabledColor",
            "type": "string",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "checked",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "checked": {
            "language": "checked",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "checkedIcon",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "checkedIcon": {
            "language": "checkedIcon",
            "type": "string",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "unCheckedIcon",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "unCheckedIcon": {
            "language": "unCheckedIcon",
            "type": "string",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "reverse",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "reverse": {
            "language": "reverse",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "hideOnUnselect",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "hideOnUnselect": {
            "language": "hideOnUnselect",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "color",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "color": {
            "language": "color",
            "type": "string",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "onChange",
      "types": "(checked: boolean) => void",
      "meta": {
        "base": {},
        "i18n": {
          "onChange": {
            "language": "onChange",
            "type": "(checked: boolean) => void",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode",
      "meta": {
        "base": {},
        "i18n": {
          "children": {
            "language": "children",
            "type": "React.ReactNode",
            "defaultValue": "null"
          }
        }
      }
    }
  ],
  "CircleViewProps": [
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "style": {
            "language": "style",
            "type": "a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "undefined"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "color",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "color": {
            "language": "color",
            "type": "string",
            "defaultValue": "undefined"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "borderColor",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "borderColor": {
            "language": "borderColor",
            "type": "string",
            "defaultValue": "undefined"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "borderWidth",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "borderWidth": {
            "language": "borderWidth",
            "type": "number",
            "defaultValue": "undefined"
          }
        }
      }
    },
    {
      "optional": "false",
      "name": "radius",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "radius": {
            "language": "radius",
            "type": "number",
            "defaultValue": "undefined"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode",
      "meta": {
        "base": {},
        "i18n": {
          "children": {
            "language": "children",
            "type": "React.ReactNode",
            "defaultValue": "undefined"
          }
        }
      }
    }
  ],
  "CollapsibleProps": [
    {
      "optional": "true",
      "name": "align",
      "types": "'top' | 'center' | 'bottom'",
      "meta": {
        "base": {},
        "i18n": {
          "align": {
            "language": "align",
            "type": "\"top\" | \"center\" | \"bottom\"",
            "defaultValue": "\"top\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "collapsed",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "collapsed": {
            "language": "collapsed",
            "type": "boolean",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "collapsedHeight",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "collapsedHeight": {
            "language": "collapsedHeight",
            "type": "number",
            "defaultValue": "0"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "duration",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "duration": {
            "language": "duration",
            "type": "number",
            "defaultValue": "300"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "easing",
      "types": "string | (() => void)",
      "meta": {
        "base": {},
        "i18n": {
          "easing": {
            "language": "easing",
            "type": "string | (() => void)",
            "defaultValue": "\"EaseOutCubic\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "style": {
            "language": "style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "onChange",
      "types": "() => void",
      "meta": {
        "base": {},
        "i18n": {
          "onChange": {
            "language": "onChange",
            "type": "() => void",
            "defaultValue": "() => {}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode",
      "meta": {
        "base": {},
        "i18n": {
          "children": {
            "language": "children",
            "type": "React.ReactNode",
            "defaultValue": "null"
          }
        }
      }
    }
  ],
  "ControllerBarProps": [
    {
      "optional": "true",
      "name": "type",
      "types": "'primary' | 'normal'",
      "meta": {
        "base": {},
        "i18n": {
          "type": {
            "language": "type",
            "type": "\"primary\" | \"normal\"",
            "defaultValue": "\"normal\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "size",
      "types": "('large' | 'normal' | 'small') | number",
      "meta": {
        "base": {},
        "i18n": {
          "size": {
            "language": "size",
            "type": "(\"large\" | \"normal\" | \"small\") | number",
            "defaultValue": "\"normal\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "stretch",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "stretch": {
            "language": "stretch",
            "type": "boolean",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "backgroundType",
      "types": "'alpha' | 'pure'",
      "meta": {
        "base": {},
        "i18n": {
          "backgroundType": {
            "language": "backgroundType",
            "type": "\"alpha\" | \"pure\"",
            "defaultValue": "\"pure\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "backgroundColor",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "backgroundColor": {
            "language": "backgroundColor",
            "type": "string",
            "defaultValue": "'#fff'"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "hasBottomBorder",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "hasBottomBorder": {
            "language": "hasBottomBorder",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "style": {
            "language": "style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "false",
      "name": "button",
      "types": "ButtonProps[]",
      "meta": {
        "base": {},
        "i18n": {
          "button": {
            "language": "button",
            "defaultValue": "undefined"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "wrapperStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "wrapperStyle": {
            "language": "wrapperStyle",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    }
  ],
  "BarGroupProps": [
    {
      "optional": "true",
      "name": "type",
      "types": "'warp' | 'swiper' | 'divide'",
      "meta": {
        "base": {},
        "i18n": {
          "type": {
            "language": "type",
            "type": "\"warp\" | \"swiper\" | \"divide\"",
            "defaultValue": "\"warp\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "size",
      "types": "'large' | 'normal' | 'small' | number",
      "meta": {
        "base": {},
        "i18n": {
          "size": {
            "language": "size",
            "type": "\"large\" | \"normal\" | \"small\" | number",
            "defaultValue": "\"normal\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "swiperConfig",
      "types": "CarouselProps",
      "meta": {
        "base": {},
        "i18n": {
          "swiperConfig": {
            "language": "swiperConfig",
            "type": "<a target='_blank' href='https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/index.d.ts#L119'>CarouselProps</a>",
            "defaultValue": "{ selectIndex: 0 }"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "style": {
            "language": "style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "false",
      "name": "children",
      "types": "React.ReactNode",
      "meta": {
        "base": {},
        "i18n": {
          "children": {
            "language": "children",
            "type": "React.ReactNode",
            "defaultValue": "undefined"
          }
        }
      }
    }
  ],
  "DatePickerProps": [
    {
      "optional": "true",
      "name": "accessibilityLabel",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "accessibilityLabel": {
            "language": "accessibilityLabel",
            "type": "string",
            "defaultValue": "\"DatePicker\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "locale",
      "types": "string | {  year?: string;  month?: string;  day?: string;  hour?: string;  minute?: string;  am?: string;  pm?: string;}",
      "meta": {
        "base": {},
        "i18n": {
          "locale": {
            "language": "locale",
            "type": "string | { year: string; month: string, day: string; hour: string; minute: string; am: string; pm: string }",
            "defaultValue": "'en'"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "mode",
      "types": "'datetime' | 'date' | 'time' | 'month' | 'year'",
      "meta": {
        "base": {},
        "i18n": {
          "mode": {
            "language": "mode",
            "type": "\"datetime\" | \"date\" | \"time\" | \"month\" | \"year\"",
            "defaultValue": "\"date\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "loop",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "loop": {
            "language": "loop",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "use12Hours",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "use12Hours": {
            "language": "use12Hours",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "isPlusZero",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "isPlusZero": {
            "language": "isPlusZero",
            "type": "boolean",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "minDate",
      "types": "Date",
      "meta": {
        "base": {},
        "i18n": {
          "minDate": {
            "language": "minDate",
            "type": "Date",
            "defaultValue": "new Date(2000, 0, 1, 0, 0, 0)"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "maxDate",
      "types": "Date",
      "meta": {
        "base": {},
        "i18n": {
          "maxDate": {
            "language": "maxDate",
            "type": "Date",
            "defaultValue": "new Date(2030, 11, 31, 23, 59, 59)"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "onDateChange",
      "types": "(value?: Date) => void",
      "meta": {
        "base": {},
        "i18n": {
          "onDateChange": {
            "language": "onDateChange",
            "type": "(value?: Date) => void",
            "defaultValue": "() => {}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "onValueChange",
      "types": "(value?: string | number, index?: number) => void",
      "meta": {
        "base": {},
        "i18n": {
          "onValueChange": {
            "language": "onValueChange",
            "type": "(value?: string | number, index?: number) => void",
            "defaultValue": "() => {}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "isAmpmFirst",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "isAmpmFirst": {
            "language": "isAmpmFirst",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "isTimeFirst",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "isTimeFirst": {
            "language": "isTimeFirst",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "date",
      "types": "Date",
      "meta": {
        "base": {},
        "i18n": {
          "date": {
            "language": "date",
            "type": "Date",
            "defaultValue": "undefined"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "defaultDate",
      "types": "Date",
      "meta": {
        "base": {},
        "i18n": {
          "defaultDate": {
            "language": "defaultDate",
            "type": "Date",
            "defaultValue": "undefined"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "style": {
            "language": "style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "pickerFontColor",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "pickerFontColor": {
            "language": "pickerFontColor",
            "type": "string"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "dateSortKeys",
      "types": "string[]",
      "meta": {
        "base": {},
        "i18n": {
          "dateSortKeys": {
            "language": "dateSortKeys",
            "type": "string[]"
          }
        }
      }
    }
  ],
  "DialogProps": [
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "contentStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "titleNumberOfLines",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "title",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "titleStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "subTitle",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "subTitleStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "motionType",
      "types": "'none' | 'ScaleFadeIn' | 'Fade' | 'PullUp' | 'ScalePullDown' | 'PushDown'"
    },
    {
      "optional": "true",
      "name": "motionConfig",
      "types": "MotionFadeProps | MotionPullUpProps | MotionScaleFadeInProps | MotionScalePullDownProps | MotionPushDownProps"
    }
  ],
  "DialogElse": [
    {
      "optional": "true",
      "name": "onShow",
      "types": "() => void"
    },
    {
      "optional": "true",
      "name": "onHide",
      "types": "() => void"
    },
    {
      "optional": "true",
      "name": "onDismiss",
      "types": "() => void"
    }
  ],
  "DialogAlertProps": [
    {
      "optional": "true",
      "name": "footerWrapperStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "false",
      "name": "confirmText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "confirmTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "confirmAccessibilityLabel",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "onConfirm",
      "types": "(data: any, args: {  close: () => void;}) => void"
    }
  ],
  "DialogCheckboxProps": [
    {
      "optional": "true",
      "name": "footerWrapperStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "false",
      "name": "confirmText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "confirmTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "confirmAccessibilityLabel",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "type",
      "types": "'radio' | 'switch'"
    },
    {
      "optional": "false",
      "name": "value",
      "types": "string | number | string[]"
    },
    {
      "optional": "true",
      "name": "maxItemNum",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "dataSource",
      "types": "DialogCheckbox[]"
    },
    {
      "optional": "true",
      "name": "onChange",
      "types": "(value: string | number) => void"
    },
    {
      "optional": "true",
      "name": "headerStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "false",
      "name": "cancelText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "cancelTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "cancelAccessibilityLabel",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "onCancel",
      "types": "() => void"
    },
    {
      "optional": "true",
      "name": "onConfirm",
      "types": "(data: any, args: {  close: () => void;}) => void"
    }
  ],
  "DialogCheckbox": [
    {
      "optional": "true",
      "name": "value",
      "types": "string | number"
    },
    {
      "optional": "true",
      "name": "title",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "iconSize",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "reverse",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "Icon",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "hideOnUnselect",
      "types": "boolean"
    }
  ],
  "DialogConfirmProps": [
    {
      "optional": "true",
      "name": "footerWrapperStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "false",
      "name": "confirmText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "confirmTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "confirmAccessibilityLabel",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "cancelText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "cancelTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "cancelAccessibilityLabel",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "onCancel",
      "types": "() => void"
    },
    {
      "optional": "true",
      "name": "onConfirm",
      "types": "(data: any, args: {  close: () => void;}) => void"
    }
  ],
  "DialogListProps": [
    {
      "optional": "true",
      "name": "maxItemNum",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "dataSource",
      "types": "DialogList[]"
    },
    {
      "optional": "true",
      "name": "listStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "cancelText",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "confirmText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "onCancel",
      "types": "() => void"
    }
  ],
  "DialogList": [
    {
      "optional": "false",
      "name": "title",
      "types": "string"
    }
  ],
  "DialogPromptProps": [
    {
      "optional": "true",
      "name": "showHelp",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "onHelpPress",
      "types": "() => void"
    },
    {
      "optional": "true",
      "name": "inputWrapperStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "inputStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "footerWrapperStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "false",
      "name": "cancelText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "cancelTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "cancelAccessibilityLabel",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "confirmText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "confirmTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "confirmAccessibilityLabel",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "onCancel",
      "types": "() => void"
    },
    {
      "optional": "true",
      "name": "onConfirm",
      "types": "(data: any, args: {  close: () => void;}) => void"
    }
  ],
  "DialogCustomProps": [
    {
      "optional": "true",
      "name": "content",
      "types": "any"
    },
    {
      "optional": "true",
      "name": "header",
      "types": "React.ElementType | (() => React.ReactNode)"
    },
    {
      "optional": "true",
      "name": "footer",
      "types": "React.ElementType | (() => React.ReactNode)"
    },
    {
      "optional": "true",
      "name": "headerStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "footerWrapperStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "false",
      "name": "cancelText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "cancelTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "cancelAccessibilityLabel",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "onCancel",
      "types": "() => void"
    },
    {
      "optional": "true",
      "name": "onConfirm",
      "types": "(data: any, args: {  close: () => void;}) => void"
    },
    {
      "optional": "false",
      "name": "confirmText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "confirmTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "confirmAccessibilityLabel",
      "types": "string"
    }
  ],
  "DividerProps": [
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "style": {
            "language": "style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "flexDirection",
      "types": "'row' | 'column'",
      "meta": {
        "base": {},
        "i18n": {
          "flexDirection": {
            "language": "flexDirection",
            "type": "\"row\" | \"column\"",
            "defaultValue": "\"row\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "visible",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "visible": {
            "language": "visible",
            "type": "boolean",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "color",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "color": {
            "language": "color",
            "type": "string",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "width",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "width": {
            "language": "width",
            "type": "number",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "height",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "height": {
            "language": "height",
            "type": "number",
            "defaultValue": "null"
          }
        }
      }
    }
  ],
  "GlobalToastProps": [
    {
      "optional": "true",
      "name": "text",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "text": {
            "language": "text",
            "type": "string",
            "defaultValue": "\"成功文案\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "size",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "size": {
            "language": "size",
            "type": "number",
            "defaultValue": "cx(40)"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "textStyle",
      "types": "StyleProp<TextStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "textStyle": {
            "language": "textStyle",
            "type": "<a target=\"_blank\" href=\"https://reactnative.dev/docs/text-style-props\">StyleProp<TextStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "iconfontStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "iconfontStyle": {
            "language": "iconfontStyle",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "contentStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "contentStyle": {
            "language": "contentStyle",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "showIcon",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "showIcon": {
            "language": "showIcon",
            "type": "boolean",
            "defaultValue": "true"
          }
        }
      }
    }
  ],
  "IconFontProps": [
    {
      "optional": "true",
      "name": "viewBox",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "viewBox": {
            "language": "viewBox",
            "type": "string",
            "defaultValue": "\"0 0 1024 1024\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "useART",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "useART": {
            "language": "useART",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "ascent",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "ascent": {
            "language": "ascent",
            "type": "number",
            "defaultValue": "896"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "descent",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "descent": {
            "language": "descent",
            "type": "number",
            "defaultValue": "-128"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "unitsPerEm",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "unitsPerEm": {
            "language": "unitsPerEm",
            "type": "number",
            "defaultValue": "1024"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "x",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "x": {
            "language": "x",
            "type": "number",
            "defaultValue": "0"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "y",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "y": {
            "language": "y",
            "type": "number",
            "defaultValue": "0"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "scaleX",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "scaleX": {
            "language": "scaleX",
            "type": "number",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "scaleY",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "scaleY": {
            "language": "scaleY",
            "type": "number",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "scale",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "scale": {
            "language": "scale",
            "type": "number",
            "defaultValue": "1.0"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "spaceOffset",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "spaceOffset": {
            "language": "spaceOffset",
            "type": "number",
            "defaultValue": "0"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "style": {
            "language": "style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "color",
      "types": "any",
      "meta": {
        "base": {},
        "i18n": {
          "color": {
            "language": "color",
            "type": "any",
            "defaultValue": "\"#000\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "size",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "size": {
            "language": "size",
            "type": "number",
            "defaultValue": "12"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "hFlip",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "hFlip": {
            "language": "hFlip",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "vFlip",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "vFlip": {
            "language": "vFlip",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "name",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "name": {
            "language": "name",
            "type": "string",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "width",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "width": {
            "language": "width",
            "type": "number",
            "defaultValue": "12"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "height",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "height": {
            "language": "height",
            "type": "number",
            "defaultValue": "12"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "fill",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "fill": {
            "language": "fill",
            "type": "string",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "stroke",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "stroke": {
            "language": "stroke",
            "type": "string",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "strokeWidth",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "strokeWidth": {
            "language": "strokeWidth",
            "type": "number",
            "defaultValue": "1"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "strokeJoin",
      "types": "'round' | 'miter' | 'bevel'",
      "meta": {
        "base": {},
        "i18n": {
          "strokeJoin": {
            "language": "strokeJoin",
            "type": "\"round\" | \"miter\" | \"bevel\"",
            "defaultValue": "\"round\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "strokeCap",
      "types": "'round' | 'butt' | 'square'",
      "meta": {
        "base": {},
        "i18n": {
          "strokeCap": {
            "language": "strokeCap",
            "type": "\"round\" | \"butt\" | \"square\"",
            "defaultValue": "\"round\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "strokeDash",
      "types": "number[]",
      "meta": {
        "base": {},
        "i18n": {
          "strokeDash": {
            "language": "strokeDash",
            "type": "number[]",
            "defaultValue": "[0, 0]"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "d",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "d": {
            "language": "d",
            "type": "string",
            "defaultValue": "''"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "opacity",
      "types": "string | number",
      "meta": {
        "base": {},
        "i18n": {
          "opacity": {
            "language": "opacity",
            "type": "string | number",
            "defaultValue": "null"
          }
        }
      }
    }
  ],
  "TopBarContainerProps": [
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "contentStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "background",
      "types": "BackgroundProps"
    }
  ],
  "TopBarContentProps": [
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "color",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "title",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "titleStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "subTitle",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "subTitleStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "position",
      "types": "'left' | 'center' | 'right'"
    },
    {
      "optional": "true",
      "name": "onPress",
      "types": "(event: GestureResponderEvent) => void"
    },
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode"
    }
  ],
  "TopBarActionProps": [
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "contentStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "size",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "spacing",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "color",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "source",
      "types": "ImageSourcePropType | string"
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode"
    },
    {
      "optional": "true",
      "name": "onPress",
      "types": "(event: GestureResponderEvent) => void"
    }
  ],
  "TopBarProps": [
    {
      "optional": "true",
      "name": "theme",
      "types": "{  background?: string;  color?: string;}"
    },
    {
      "optional": "true",
      "name": "leftActions",
      "types": "TopBarActionProps[]"
    },
    {
      "optional": "true",
      "name": "actions",
      "types": "TopBarActionProps[]"
    },
    {
      "optional": "true",
      "name": "contentStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "background",
      "types": "BackgroundProps"
    },
    {
      "optional": "true",
      "name": "onBack",
      "types": "(...args: any[]) => void"
    }
  ],
  "ModalProps": [
    {
      "optional": "true",
      "name": "animationType",
      "types": "'fade' | 'none'"
    },
    {
      "optional": "true",
      "name": "alignContainer",
      "types": "'top' | 'center' | 'bottom'"
    },
    {
      "optional": "true",
      "name": "onMaskPress",
      "types": "() => void"
    },
    {
      "optional": "true",
      "name": "modalChildStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "mask",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "maskStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "onlyLastModalVisible",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "useKeyboardView",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "visible",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "activeIdx",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "onDismiss",
      "types": "() => void"
    }
  ],
  "ListDate": [
    {
      "optional": "true",
      "name": "styles",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "title",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "Icon",
      "types": "React.ElementType"
    },
    {
      "optional": "false",
      "name": "value",
      "types": "any"
    }
  ],
  "MotionProps": [
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "show",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode"
    },
    {
      "optional": "true",
      "name": "showDuration",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "hideDuration",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "onShow",
      "types": "() => void"
    },
    {
      "optional": "true",
      "name": "onHide",
      "types": "() => void"
    },
    {
      "optional": "true",
      "name": "animationConfig",
      "types": "{  duration?: number;  delay?: number;  isInteraction?: boolean;  useNativeDriver?: boolean;}"
    }
  ],
  "MotionFadeProps": [
    {
      "optional": "true",
      "name": "fadeOpacity",
      "types": "number"
    }
  ],
  "MotionPullUpProps": [
    {
      "optional": "true",
      "name": "dropHeight",
      "types": "number"
    }
  ],
  "MotionPushDownProps": [
    {
      "optional": "true",
      "name": "dropHeight",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "isAlign",
      "types": "boolean"
    }
  ],
  "MotionScaleFadeInProps": [
    {
      "optional": "true",
      "name": "initScale",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "finalScale",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "isAlign",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "width",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "height",
      "types": "number"
    }
  ],
  "MotionScalePullDownProps": [
    {
      "optional": "true",
      "name": "initScale",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "isAlign",
      "types": "boolean"
    }
  ],
  "MotionToastProps": [
    {
      "optional": "true",
      "name": "initScale",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "onFinish",
      "types": "() => void"
    }
  ],
  "NotificationProps": [
    {
      "optional": "true",
      "name": "accessibilityLabel",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "accessibilityLabel": {
            "language": "accessibilityLabel",
            "type": "string",
            "defaultValue": "\"Notification\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "style": {
            "language": "style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "theme",
      "types": "{  background?: string;  text?: string;  iconColor?: string;  successIcon?: string;  warningIcon?: string;  errorIcon?: string;  closeIcon?: string;  radius?: number;}",
      "meta": {
        "base": {},
        "i18n": {
          "theme": {
            "language": "theme",
            "type": "{ background: string; text: string; iconColor: string; successIcon: string; warningIcon: string; errorIcon: string; closeIcon: string; radius: number }",
            "defaultValue": "{ background: '#fff', text: '#495054', iconColor: undefined, successIcon: undefined, warningIcon: undefined, errorIcon: undefined, closeIcon: '#81828B' }"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "show",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "show": {
            "language": "show",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "icon",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "icon": {
            "language": "icon",
            "type": "string",
            "defaultValue": "undefined"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "backIcon",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "backIcon": {
            "language": "backIcon",
            "type": "string",
            "defaultValue": "\"M329.557333 281.9072a32.8704 32.8704 0 0 1 0.887467 0.853333l177.527467 178.449067 161.6896-171.281067a33.1776 33.1776 0 0 1 47.581866-0.682666l0.682667 0.682666a34.133333 34.133333 0 0 1 0.682667 47.581867l-162.474667 172.100267 162.269867 163.157333a34.133333 34.133333 0 0 1 0.750933 47.377067l-0.853333 0.9216a32.8704 32.8704 0 0 1-46.455467 1.604266l-0.887467-0.853333-161.6896-162.577067-155.7504 165.034667a33.1776 33.1776 0 0 1-46.865066 1.365333l-1.365334-1.365333a34.133333 34.133333 0 0 1-0.682666-47.581867l156.501333-165.853866L282.999467 331.776a34.133333 34.133333 0 0 1-0.750934-47.342933l0.853334-0.9216a32.8704 32.8704 0 0 1 46.455466-1.604267z\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "variant",
      "types": "'success' | 'warning' | 'error'",
      "meta": {
        "base": {},
        "i18n": {
          "variant": {
            "language": "variant",
            "type": "\"success\" | \"warning\" | \"error\"",
            "defaultValue": "\"warning\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "enableClose",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "enableClose": {
            "language": "enableClose",
            "type": "boolean",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "autoCloseTime",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "autoCloseTime": {
            "language": "autoCloseTime",
            "type": "number",
            "defaultValue": "1500"
          }
        }
      }
    },
    {
      "optional": "false",
      "name": "message",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "message": {
            "language": "message",
            "type": "string",
            "defaultValue": "''"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "onClose",
      "types": "() => void",
      "meta": {
        "base": {},
        "i18n": {
          "onClose": {
            "language": "onClose",
            "type": "() => void",
            "defaultValue": "() => {}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "motionConfig",
      "types": "MotionProps",
      "meta": {
        "base": {},
        "i18n": {
          "motionConfig": {
            "language": "motionConfig",
            "type": "<a target='_blank' href='https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/index.d.ts#L563'>MotionProps<ViewStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "motionStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "motionStyle": {
            "language": "motionStyle",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "imageSource",
      "types": "ImageSourcePropType",
      "meta": {
        "base": {},
        "i18n": {
          "imageSource": {
            "language": "imageSource",
            "type": "<a target=\"_blank\" href=\"https://reactnative.dev/docs/image#source\">ImageSourcePropType</a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "imageStyle",
      "types": "StyleProp<ImageStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "imageStyle": {
            "language": "imageStyle",
            "type": "<a target=\"_blank\" href=\"https://reactnative.dev/docs/image-style-props\">StyleProp<ImageStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "backIconSize",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "backIconSize": {
            "language": "backIconSize",
            "type": "number",
            "defaultValue": "24"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "backIconCenter",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "backIconCenter": {
            "language": "backIconCenter",
            "type": "boolean",
            "defaultValue": "false"
          }
        }
      }
    }
  ],
  "NotificationLegacyProps": [
    {
      "optional": "true",
      "name": "accessibilityLabel",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "accessibilityLabel": {
            "language": "accessibilityLabel",
            "type": "string",
            "defaultValue": "\"NotificationLegacy\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "style": {
            "language": "style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "theme",
      "types": "{  background?: string;  text?: string;  iconColor?: string;  successIcon?: string;  warningIcon?: string;  errorIcon?: string;  closeIcon?: string;  radius?: number;}",
      "meta": {
        "base": {},
        "i18n": {
          "theme": {
            "language": "theme",
            "type": "{ background: string; text: string; iconColor: string; successIcon: string; warningIcon: string; errorIcon: string; closeIcon: string; radius: number }",
            "defaultValue": "{ background: '#fff', text: '#495054', iconColor: undefined, successIcon: undefined, warningIcon: undefined, errorIcon: undefined, closeIcon: '#81828B' }"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "icon",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "icon": {
            "language": "icon",
            "type": "string",
            "defaultValue": "undefined"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "variant",
      "types": "'success' | 'warning' | 'error'",
      "meta": {
        "base": {},
        "i18n": {
          "variant": {
            "language": "variant",
            "type": "\"success\" | \"warning\" | \"error\"",
            "defaultValue": "\"warning\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "enableClose",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "enableClose": {
            "language": "enableClose",
            "type": "boolean",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "autoCloseTime",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "autoCloseTime": {
            "language": "autoCloseTime",
            "type": "number",
            "defaultValue": "1500"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "message",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "message": {
            "language": "message",
            "type": "string",
            "defaultValue": "''"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode",
      "meta": {
        "base": {},
        "i18n": {
          "children": {
            "language": "children",
            "type": "React.ReactNode",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "onClose",
      "types": "() => void",
      "meta": {
        "base": {},
        "i18n": {
          "onClose": {
            "language": "onClose",
            "type": "() => void",
            "defaultValue": "() => {}"
          }
        }
      }
    }
  ],
  "PickerViewProps": [
    {
      "optional": "true",
      "name": "loop",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "selectedValue",
      "types": "string | number | boolean"
    },
    {
      "optional": "true",
      "name": "onValueChange",
      "types": "(value: string | number, index: number) => void"
    },
    {
      "optional": "true",
      "name": "accessibilityLabel",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "itemTextColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "selectedItemTextColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "dividerColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "visibleItemCount",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "textSize",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "itemAlign",
      "types": "'flex-end' | 'center' | 'flex-start' | 'baseline' | 'stretch'"
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "false",
      "name": "children",
      "types": "React.ReactNode"
    },
    {
      "optional": "true",
      "name": "theme",
      "types": "{  fontSize?: number;  fontColor?: string;  dividerColor?: string;  unitFontSize?: number;  unitFontColor?: string;}"
    }
  ],
  "PopupProps": [
    {
      "optional": "true",
      "name": "wrapperStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "title",
      "types": "string | string[] | React.ReactNode"
    },
    {
      "optional": "true",
      "name": "subTitle",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "titleTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "titleWrapperStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "switchValue",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "onSwitchValueChange",
      "types": "(value: boolean) => void"
    },
    {
      "optional": "true",
      "name": "onCancel",
      "types": "() => void"
    },
    {
      "optional": "true",
      "name": "onConfirm",
      "types": "(data: any, args: {  close: () => void;}) => void"
    },
    {
      "optional": "true",
      "name": "cancelText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "confirmText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "cancelTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "confirmTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "footer",
      "types": "React.ReactNode"
    },
    {
      "optional": "true",
      "name": "footerWrapperStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "footerType",
      "types": "'both' | 'singleConfirm' | 'singleCancel'"
    },
    {
      "optional": "true",
      "name": "motionType",
      "types": "'none' | 'ScaleFadeIn' | 'Fade' | 'PullUp' | 'ScalePullDown'"
    },
    {
      "optional": "true",
      "name": "motionConfig",
      "types": "MotionScaleFadeInProps | MotionFadeProps | MotionPullUpProps | MotionScalePullDownProps"
    },
    {
      "optional": "true",
      "name": "isAlign",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "backIconColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "onBack",
      "types": "(args: {  close: () => void;}) => void"
    },
    {
      "optional": "true",
      "name": "backText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "showBack",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "onMaskPress",
      "types": "(args: {  close: () => void;}) => void"
    },
    {
      "optional": "true",
      "name": "theme",
      "types": "{  cellHeight?: number;  cellBg?: string;  cellFontColor?: string;  cellFontSize?: number;  subTitleFontColor?: string;  titleRadius?: number;  titleBg?: string;  titleHeight?: number;  footerRadius?: number;  bottomBg?: string;  lineColor?: string;  titleFontSize?: number;  checkboxColor?: string;  titleFontColor?: string;  cancelFontSize?: number;  cancelFontColor?: string;  confirmFontSize?: number;  confirmFontColor?: string;  backIconColor?: string;  tintColor?: string;  numberSelector?: {    cellPlusColor?: string;    maximumTrackTintColor?: string;  };  list?: {    cellFontColor?: string;  };}"
    }
  ],
  "PopUpListProps": [
    {
      "optional": "true",
      "name": "listWrapperStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "dataSource",
      "types": "ListDate[]"
    },
    {
      "optional": "true",
      "name": "type",
      "types": "'radio' | 'switch'"
    },
    {
      "optional": "true",
      "name": "maxItemNum",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "selectedIcon",
      "types": "React.ReactNode"
    },
    {
      "optional": "true",
      "name": "iconTintColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "contentCenter",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "subTitle",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "value",
      "types": "string | number | string[] | number[]"
    },
    {
      "optional": "true",
      "name": "listItemStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "onSelect",
      "types": "(value: string | number, sValue?: boolean) => void"
    },
    {
      "optional": "true",
      "name": "_onDataChange",
      "types": "(value?: string | string[]) => void"
    },
    {
      "optional": "true",
      "name": "styles",
      "types": "{  container?: StyleProp<ViewStyle>;  content?: StyleProp<ViewStyle>;  title?: StyleProp<ViewStyle>;  contentRight?: StyleProp<ViewStyle>;}"
    }
  ],
  "valueChangeProps": [
    {
      "optional": "false",
      "name": "hour",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "minute",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "value",
      "types": "number"
    }
  ],
  "PopUpCountdownProps": [
    {
      "optional": "true",
      "name": "countdownWrapperStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "onlyone",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "min",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "max",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "step",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "value",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "pickerFontColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "pickerUnitColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "hourText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "minuteText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "onValueChange",
      "types": "(data?: valueChangeProps) => void"
    },
    {
      "optional": "true",
      "name": "_onDataChange",
      "types": "(date: Date) => void"
    },
    {
      "optional": "true",
      "name": "hourPickerStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "hourUnitStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "minutePickerStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "minuteUnitStyle",
      "types": "StyleProp<TextStyle>"
    }
  ],
  "PopupDatePickerProps": [
    {
      "optional": "true",
      "name": "_onDataChange",
      "types": "(date: Date) => void"
    },
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode"
    }
  ],
  "PopupNumberSelectorProps": [
    {
      "optional": "true",
      "name": "numberSelectorWrapperStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "type",
      "types": "'basic' | 'slider'"
    },
    {
      "optional": "true",
      "name": "min",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "max",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "step",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "scale",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "value",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "onValueChange",
      "types": "(value: number) => void"
    },
    {
      "optional": "true",
      "name": "_onDataChange",
      "types": "(value: number) => void"
    },
    {
      "optional": "true",
      "name": "valueChangeTime",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "isValueChangeUniform",
      "types": "boolean"
    }
  ],
  "PickerDataProps": [
    {
      "optional": "false",
      "name": "label",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "value",
      "types": "string"
    }
  ],
  "PopupPickerProps": [
    {
      "optional": "true",
      "name": "label",
      "types": "string | string[]"
    },
    {
      "optional": "true",
      "name": "spacing",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "labelOffset",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "pickerWrapperStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "pickerStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "value",
      "types": "string | number | boolean | string[]"
    },
    {
      "optional": "true",
      "name": "dataSource",
      "types": "PickerDataProps[][] | PickerDataProps[]"
    },
    {
      "optional": "true",
      "name": "singlePicker",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "pickerFontColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "pickerUnitColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "onValueChange",
      "types": "(newValue: string | number, idx: number) => void"
    },
    {
      "optional": "true",
      "name": "_onDataChange",
      "types": "(newValue: string | number, idx: number) => void"
    },
    {
      "optional": "true",
      "name": "onConfirm",
      "types": "(data: any, idx: number, args: {  close: () => void;}) => void"
    }
  ],
  "PopupTimerPickerProps": [],
  "PopupCustomProps": [
    {
      "optional": "false",
      "name": "content",
      "types": "React.ReactNode"
    }
  ],
  "PopupTipsProps": [
    {
      "optional": "true",
      "name": "modalChildStyle",
      "types": "StyleProp<ViewStyle>"
    }
  ],
  "PopupToastProps": [
    {
      "optional": "true",
      "name": "message",
      "types": "string"
    }
  ],
  "PopupDropdownProps": [
    {
      "optional": "false",
      "name": "data",
      "types": "Array<{  key?: string;  title?: string;  value?: string;}>"
    },
    {
      "optional": "true",
      "name": "onSelect",
      "types": "(value?: number | string) => void"
    },
    {
      "optional": "true",
      "name": "cornerSize",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "customCornerSize",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "cornerDirection",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "cornerDirectionValue",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "cornerColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "corner",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "listStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "cornerStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "touchViewStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "textStyle",
      "types": "StyleProp<TextStyle>"
    }
  ],
  "GestureProps": [
    {
      "optional": "true",
      "name": "pointerEvents",
      "types": "'box-none' | 'none' | 'box-only' | 'auto'"
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode"
    }
  ],
  "ProgressProps": [
    {
      "optional": "true",
      "name": "gradientId",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "startDegree",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "andDegree",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "min",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "max",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "stepValue",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "backStrokeOpacity",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "foreStrokeOpacity",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "scaleHeight",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "backColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "foreColor",
      "types": "string | StopsProps[] | {  [key: string]: string;}"
    },
    {
      "optional": "true",
      "name": "x1",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "x2",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "y1",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "y2",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "renderCenterView",
      "types": "React.ReactNode"
    }
  ],
  "ProgressBasicProps": [
    {
      "optional": "true",
      "name": "pointerEvents",
      "types": "'box-none' | 'none' | 'box-only' | 'auto'"
    },
    {
      "optional": "true",
      "name": "thumbFill",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "thumbStrokeWidth",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "thumbStroke",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "thumbRadius",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "needMaxCircle",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "needMinCircle",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "startColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "endColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "value",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "onValueChange",
      "types": "(value: number) => void"
    },
    {
      "optional": "true",
      "name": "onSlidingComplete",
      "types": "(value: number) => void"
    }
  ],
  "SpaceProps": [
    {
      "optional": "true",
      "name": "scaleNumber",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "value",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "strokeWidth",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "onValueChange",
      "types": "(value: number) => void"
    },
    {
      "optional": "true",
      "name": "onSlidingComplete",
      "types": "(value: number) => void"
    }
  ],
  "DoubleProps": [
    {
      "optional": "true",
      "name": "maxValue",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "minValue",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "onValueChange",
      "types": "(argus: {  minValue: number;  maxValue: number;}) => void"
    },
    {
      "optional": "true",
      "name": "onSlidingComplete",
      "types": "(argus: {  minValue: number;  maxValue: number;}) => void"
    },
    {
      "optional": "true",
      "name": "minThumbFill",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "minThumbStroke",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "thumbFill",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "thumbStrokeWidth",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "thumbStroke",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "thumbRadius",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "startColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "endColor",
      "types": "string"
    }
  ],
  "ComposeProps": [
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "value1",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "value2",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "startDegree1",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "andDegree1",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "min1",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "max1",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "stepValue",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "backStrokeOpacity",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "foreStrokeOpacity",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "scaleHeight1",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "scaleHeight2",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "backColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "foreColor",
      "types": "string | StopsProps[] | {  [key: string]: string;}"
    },
    {
      "optional": "true",
      "name": "thumbFill",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "thumbStrokeWidth",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "thumbStroke",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "startDegree2",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "reduceDegree2",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "min2",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "max2",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "startColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "endColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "onValueChange",
      "types": "(argus: {  value1: number;  value2: number;}) => void"
    },
    {
      "optional": "true",
      "name": "onSlidingComplete",
      "types": "(argus: {  value1: number;  value2x: number;}) => void"
    },
    {
      "optional": "true",
      "name": "thumbRadius1",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "thumbRadius2",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "needCircle1",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "needCircle2",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "thumbStroke2",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "thumbStrokeWidth2",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "thumbFill2",
      "types": "string"
    }
  ],
  "RotationViewProps": [
    {
      "optional": "true",
      "name": "accessibilityLabel",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode"
    },
    {
      "optional": "true",
      "name": "active",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "duration",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "useNativeDriver",
      "types": "boolean"
    }
  ],
  "SliderProps": [
    {
      "optional": "true",
      "name": "theme",
      "types": "{  width?: number;  trackRadius?: number;  trackHeight?: number;  minimumTrackTintColor?: string;  maximumTrackTintColor?: string;  thumbSize?: number;  thumbRadius?: number;  thumbTintColor?: string;}"
    },
    {
      "optional": "true",
      "name": "accessibilityLabel",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "onLayout",
      "types": "(x: number) => void"
    },
    {
      "optional": "true",
      "name": "value",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "minimumValue",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "maximumValue",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "stepValue",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "reverseValue",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "minimumTrackTintColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "maximumTrackTintColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "thumbTintColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "thumbTouchSize",
      "types": "{  width: number;  height: number;}"
    },
    {
      "optional": "true",
      "name": "onValueChange",
      "types": "(newValue: number) => void"
    },
    {
      "optional": "true",
      "name": "onSlidingStart",
      "types": "(newValue: number) => void"
    },
    {
      "optional": "true",
      "name": "onSlidingComplete",
      "types": "(newValue: number) => void"
    },
    {
      "optional": "true",
      "name": "onScrollEvent",
      "types": "(value: number) => void"
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "trackStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "thumbStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "debugTouchArea",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "onlyMaximumTrack",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "canTouchTrack",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "animateTransitions",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "animationType",
      "types": "'spring' | 'timing'"
    },
    {
      "optional": "true",
      "name": "animationConfig",
      "types": "{  friction?: number;  tension?: number;  duration?: number;  easing?: () => void;  delay?: number;}"
    },
    {
      "optional": "true",
      "name": "renderMinimumTrack",
      "types": "() => React.ReactNode"
    },
    {
      "optional": "true",
      "name": "renderMaximumTrack",
      "types": "() => React.ReactNode"
    },
    {
      "optional": "true",
      "name": "renderThumb",
      "types": "() => React.ReactNode"
    },
    {
      "optional": "true",
      "name": "horizontal",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "styles",
      "types": "{  container?: StyleProp<ViewStyle>;  track?: StyleProp<ViewStyle>;  thumb?: StyleProp<ViewStyle>;  touchArea?: StyleProp<ViewStyle>;  debugThumbTouchArea?: StyleProp<ViewStyle>;}"
    }
  ],
  "StepperProps": [
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "buttonStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "inputStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "buttonType",
      "types": "'ellipse' | 'triangle'"
    },
    {
      "optional": "true",
      "name": "min",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "max",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "value",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "stepValue",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "editable",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "ellipseIconColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "triangleIconColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "selectionColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "iconMinusPath",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "iconPlusPath",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "onValueChange",
      "types": "(value: number) => void"
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "getTextInputRef",
      "types": "(TextInputRef: {}) => void"
    }
  ],
  "SwipeoutAction": [
    {
      "optional": "true",
      "name": "backgroundColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "color",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "key",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "content",
      "types": "React.ReactNode"
    },
    {
      "optional": "true",
      "name": "text",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "type",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "fontSize",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "textStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "onPress",
      "types": "(e: GestureResponderEvent) => void"
    }
  ],
  "SwipeoutProps": [
    {
      "optional": "true",
      "name": "accessibilityLabel",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "backgroundColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "autoClose",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "left",
      "types": "SwipeoutAction[]"
    },
    {
      "optional": "true",
      "name": "right",
      "types": "SwipeoutAction[]"
    },
    {
      "optional": "true",
      "name": "buttonWidth",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "onOpen",
      "types": "(sectionID?: number, rowID?: number) => void"
    },
    {
      "optional": "true",
      "name": "onClose",
      "types": "(sectionID?: number, rowID?: number) => void"
    },
    {
      "optional": "true",
      "name": "sensitivity",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "scroll",
      "types": "(value?: boolean) => void"
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "close",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "sectionID",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "rowID",
      "types": "number"
    }
  ],
  "SwitchButtonProps": [
    {
      "optional": "true",
      "name": "theme",
      "types": "{  width?: number;  height?: number;  thumbSize?: number;  margin?: number | number[];  tintColor?: string | {    [key: string]: string;  };  onTintColor?: string;  thumbTintColor?: string;  onThumbTintColor?: string;}"
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "accessibilityLabel",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "value",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "defaultValue",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "size",
      "types": "{  width?: number;  height?: number;  activeSize?: number;  margin?: number;}"
    },
    {
      "optional": "false",
      "name": "onValueChange",
      "types": "(value: boolean) => void"
    },
    {
      "optional": "true",
      "name": "tintColor",
      "types": "string | {  [key: string]: string;}"
    },
    {
      "optional": "true",
      "name": "onTintColor",
      "types": "string | {  [key: string]: string;}"
    },
    {
      "optional": "true",
      "name": "thumbTintColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "onThumbTintColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "borderColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "thumbStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "useNativeDriver",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "onText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "offText",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "onTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "offTextStyle",
      "types": "StyleProp<TextStyle>"
    }
  ],
  "TabProps": [
    {
      "optional": "true",
      "name": "swipeable",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "animated",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "activeKey",
      "types": "string | number"
    },
    {
      "optional": "true",
      "name": "defaultActiveKey",
      "types": "string | number"
    },
    {
      "optional": "true",
      "name": "onChange",
      "types": "(activeKey?: number | string) => void"
    },
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode"
    },
    {
      "optional": "true",
      "name": "tabContentStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "tabDefaultColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "tabBarBackgroundColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "tabBarUnderlineStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "tabBarStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "tabTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "tabActiveTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "tabsContainerStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "tabStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "tabBarPosition",
      "types": "'top' | 'bottom'"
    },
    {
      "optional": "true",
      "name": "tabNavAccessibilityLabel",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "useViewPagerOnAndroid",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "distanceToChangeTab",
      "types": "number"
    }
  ],
  "TabPaneProps": [
    {
      "optional": "true",
      "name": "tabWidth",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "tab",
      "types": "React.ReactNode"
    }
  ],
  "TabBarArr": [],
  "TabBarProps": [
    {
      "optional": "true",
      "name": "type",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "underlineStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "tabStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "tabActiveStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "tabTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "tabActiveTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "wrapperStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "activeKey",
      "types": "string | number"
    },
    {
      "optional": "true",
      "name": "defaultActiveKey",
      "types": "string | number"
    },
    {
      "optional": "false",
      "name": "tabs",
      "types": "TabBarArr[]"
    },
    {
      "optional": "true",
      "name": "isUnderlineCenter",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "activeColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "activeIndex",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "defaultActiveIndex",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "gutter",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "onChange",
      "types": "(index: string) => void"
    }
  ],
  "TabDataSource": [
    {
      "optional": "false",
      "name": "value",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "label",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "renderTab",
      "types": "(isActive: boolean, state: {}, props: {}) => React.ReactNode"
    }
  ],
  "TabsProps": [
    {
      "optional": "true",
      "name": "accessibilityLabel",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "wrapperStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "tabStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "tabActiveStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "tabTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "tabActiveTextStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "tabContentStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "underlineStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "underlineWidth",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "defaultActiveKey",
      "types": "number | string"
    },
    {
      "optional": "true",
      "name": "activeKey",
      "types": "number | string"
    },
    {
      "optional": "false",
      "name": "dataSource",
      "types": "TabDataSource[]"
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "maxItem",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "tabPosition",
      "types": "'top' | 'bottom'"
    },
    {
      "optional": "true",
      "name": "swipeable",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "activeColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "background",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "preload",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "preloadTimeout",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "velocityThreshold",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "renderPlaceholder",
      "types": "(activeIndex: number, child: React.ReactNode) => React.ReactNode"
    },
    {
      "optional": "true",
      "name": "onChange",
      "types": "(tab: TabDataSource, idx: number) => void"
    },
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode"
    },
    {
      "optional": "true",
      "name": "extraSpace",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "animationConfig",
      "types": "{  duration?: number;  easing?: () => void;  delay?: number;  isInteraction?: boolean;  useNativeDriver?: boolean;}"
    }
  ],
  "TabContentProps": [
    {
      "optional": "true",
      "name": "accessibilityLabel",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "children",
      "types": "React.ReactNode"
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean"
    },
    {
      "optional": "false",
      "name": "activeIndex",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "preload",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "preloadTimeout",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "velocityThreshold",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "onMove",
      "types": "(gestureState: {}, index: number, percent: number) => void"
    },
    {
      "optional": "true",
      "name": "onRelease",
      "types": "(gestureState: {}, index: number, percent: number) => void"
    },
    {
      "optional": "true",
      "name": "renderPlaceholder",
      "types": "(activeIndex: number, child: React.ReactNode) => React.ReactNode"
    },
    {
      "optional": "true",
      "name": "animationConfig",
      "types": "{  duration?: number;  easing?: () => void;  delay?: number;  isInteraction?: boolean;  useNativeDriver?: boolean;}"
    }
  ],
  "TabPanelProps": [
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "background",
      "types": "string"
    }
  ],
  "TimerPickerProps": [
    {
      "optional": "true",
      "name": "accessibilityLabel",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "startTime",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "endTime",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "onTimerChange",
      "types": "(startTime: number, endTime: number) => void"
    },
    {
      "optional": "true",
      "name": "is12Hours",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "singlePicker",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "prefixPosition",
      "types": "string[] | ('left' | 'right')"
    },
    {
      "optional": "true",
      "name": "pickerFontColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "symbol",
      "types": "string"
    }
  ],
  "TipsProps": [
    {
      "optional": "true",
      "name": "contentStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "tipStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "bgColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "show",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode"
    },
    {
      "optional": "true",
      "name": "showCorner",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "motionType",
      "types": "'Fade' | 'PullUp' | 'ScaleFadeIn' | 'ScalePullDown' | 'PushDown'"
    },
    {
      "optional": "true",
      "name": "cornerPosition",
      "types": "'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight'"
    },
    {
      "optional": "true",
      "name": "motionConfig",
      "types": "MotionScaleFadeInProps | MotionFadeProps | MotionPullUpProps | MotionScalePullDownProps | MotionPushDownProps"
    },
    {
      "optional": "true",
      "name": "withModal",
      "types": "boolean"
    }
  ],
  "ToastProps": [
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "contentStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "textStyle",
      "types": "StyleProp<TextStyle>"
    },
    {
      "optional": "true",
      "name": "imageStyle",
      "types": "StyleProp<ImageStyle>"
    },
    {
      "optional": "true",
      "name": "text",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "show",
      "types": "boolean"
    },
    {
      "optional": "false",
      "name": "onFinish",
      "types": "() => void"
    },
    {
      "optional": "true",
      "name": "showPosition",
      "types": "'top' | 'bottom' | 'center'"
    },
    {
      "optional": "true",
      "name": "image",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode"
    }
  ],
  "ToastSuccessProps": [
    {
      "optional": "true",
      "name": "size",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "d",
      "types": "string | any[]"
    },
    {
      "optional": "true",
      "name": "iconfontStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "color",
      "types": "string"
    }
  ],
  "ToastWarningProps": [
    {
      "optional": "true",
      "name": "size",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "d",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "iconfontStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "color",
      "types": "string"
    }
  ],
  "ToastErrorProps": [
    {
      "optional": "true",
      "name": "size",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "d",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "iconfontStyle",
      "types": "StyleProp<ViewStyle>"
    },
    {
      "optional": "true",
      "name": "color",
      "types": "string"
    }
  ],
  "ToastLoadingProps": [
    {
      "optional": "true",
      "name": "size",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN"
          },
          "en-US": {
            "language": "en-US"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "color",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "loading",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "strokeWidth",
      "types": "number"
    },
    {
      "optional": "true",
      "name": "loadingBackgroundColor",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "loadingStyle",
      "types": "StyleProp<ViewStyle>"
    }
  ],
  "TYSectionInputProps": [
    {
      "optional": "false",
      "name": "title",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "标题",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Title",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "titleStyle",
      "types": "StyleProp<TextStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "标题样式",
            "type": "<a target=\"_blank\" href=\"https://reactnative.dev/docs/text-style-props\">StyleProp<TextStyle></a>"
          },
          "en-US": {
            "language": "en-US",
            "description": "Title style",
            "type": "<a target=\"_blank\" href=\"https://reactnative.dev/docs/text-style-props\">StyleProp<TextStyle></a>"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "inputStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "输入框样式",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          },
          "en-US": {
            "language": "en-US",
            "description": "Input box style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "{}"
          }
        }
      }
    }
  ],
  "TYFlatListData": [
    {
      "optional": "true",
      "name": "key",
      "types": "string | number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "Key 值",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Key Value",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "Action",
      "types": "any",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "右侧 Action 具体值",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Specific value of action on the right",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "title",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "标题",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Title",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "subTitle",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "副标题",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "SubTitle",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "checked",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "是否已经选中",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Is it already selected",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "onChange",
      "types": "() => void",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "改变回调",
            "defaultValue": "() => {}"
          },
          "en-US": {
            "language": "en-US",
            "description": "Change callback",
            "defaultValue": "() => {}"
          }
        }
      }
    }
  ],
  "TYFlatListProps": [
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "内容样式",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Container style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "false",
      "name": "data",
      "types": "ItemT[]",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "数据源",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Data source",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "separatorStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "分割线样式",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Separator style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "contentContainerStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "应用于滚动视图内容容器，该容器包装了所有子视图",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>"
          },
          "en-US": {
            "language": "en-US",
            "description": "These styles will be applied to the scroll view content container which wraps all of the child views.",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "flatListRef",
      "types": "() => void",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "列表项实例"
          },
          "en-US": {
            "language": "en-US",
            "description": "List item instance",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "useART",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "是否使用 ART 实现版本",
            "defaultValue": "false"
          },
          "en-US": {
            "language": "en-US",
            "description": "Is art used to implement the version",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "scrollEnabled",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "内容是否可以滚动",
            "defaultValue": "true"
          },
          "en-US": {
            "language": "en-US",
            "description": "Can content scroll",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "renderItem",
      "types": "ListRenderItem<ItemT> | null",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "自定义列表项",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Custom list items",
            "defaultValue": "null"
          }
        }
      }
    }
  ],
  "TYFlatListCheckbox": [],
  "TYListItemProps": [
    {
      "optional": "true",
      "name": "styles",
      "types": "{  container?: StyleProp<ViewStyle>;  content?: StyleProp<ViewStyle>;  contentLeft?: StyleProp<ViewStyle>;  contentCenter?: StyleProp<ViewStyle>;  contentRight?: StyleProp<ViewStyle>;  title?: StyleProp<TextStyle>;  subTitle?: StyleProp<TextStyle>;}",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "列表项的所有样式",
            "defaultValue": "{}"
          },
          "en-US": {
            "language": "en-US",
            "description": "All styles for list items",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "theme",
      "types": "{  boardBg?: string;  fontColor?: string;  subFontColor?: string;  descFontColor?: string;  cellLine?: string;  cellBg?: string;  cellRadius?: number;  margin?: number[] | number;  padding?: number[] | number;}",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "主题配置",
            "defaultValue": "{}"
          },
          "en-US": {
            "language": "en-US",
            "description": "Theme configuration",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "arrow",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "列表项右边区域是否显示 arrow 标签",
            "defaultValue": "false"
          },
          "en-US": {
            "language": "en-US",
            "description": "Is the arrow label displayed in the right area of the list item",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "arrowColor",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "arrow 图标颜色",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Arrow icon color",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "arrowUseIcon",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "arrow 是否使用 IconFont 渲染",
            "defaultValue": "false"
          },
          "en-US": {
            "language": "en-US",
            "description": "Does arrow render with iconfont",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "是否禁用列表点击事件，注意: Action点击事件不被此影响",
            "defaultValue": "false"
          },
          "en-US": {
            "language": "en-US",
            "description": "Whether to disable list click events. Note: action click events are not affected by this",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "actionDisabled",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "是否禁用 `Action` 点击事件",
            "defaultValue": "false"
          },
          "en-US": {
            "language": "en-US",
            "description": "Disable 'action' click events",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "title",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "标题",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Title",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "subTitle",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "副标题",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "SubTitle",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "子元素",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Subelement",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "imageFollowIconColor",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "图片的 tintColor 是否跟随 iconColor",
            "defaultValue": "true"
          },
          "en-US": {
            "language": "en-US",
            "description": "Does the tintColor of the image follow iconColor",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "iconType",
      "types": "'auto' | 'image' | 'iconfont' | 'text'",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "左侧 Icon 类型",
            "defaultValue": "'auto'"
          },
          "en-US": {
            "language": "en-US",
            "description": "Icon type on the left",
            "defaultValue": "'auto'"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "actionType",
      "types": "'auto' | 'image' | 'iconfont' | 'text'",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "右侧 Action 类型",
            "defaultValue": "'auto'"
          },
          "en-US": {
            "language": "en-US",
            "description": "Right action type",
            "defaultValue": "'auto'"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "iconSize",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "图标尺寸",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Icon size",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "iconColor",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "图标颜色",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Icon Color",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "Icon",
      "types": "any",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "左侧 Icon 具体值，当类型为 string时，默认使用 IconFont",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Icon specific value on the left. When the type is string, Iconfont is used by default",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "Action",
      "types": "any",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "右侧 Action 具体值，当类型为 string时，默认使用 TYText",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Specific value of action on the right. When the type is string, TYText is used by default",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "needUpdate",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "是否需要重新渲染",
            "defaultValue": "true"
          },
          "en-US": {
            "language": "en-US",
            "description": "Do I need to render again",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "useART",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "是否使用 ART 实现版本",
            "defaultValue": "false"
          },
          "en-US": {
            "language": "en-US",
            "description": "Is art used to implement the version",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "onActionPress",
      "types": "() => void",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "列表项右边区域的触发回调",
            "defaultValue": "() => {}"
          },
          "en-US": {
            "language": "en-US",
            "description": "Trigger callback in the area to the right of the list item",
            "defaultValue": "() => {}"
          }
        }
      }
    }
  ],
  "SectionDataProps": [
    {
      "optional": "true",
      "name": "key",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "Key 值",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Key Value",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "title",
      "types": "string | React.ReactNode",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "分组列表的标题或者自定义头部渲染",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Group list title or custom header rendering",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "value",
      "types": "string | number | boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "列表项的具体值",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "The specific value of the list item",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "disabled",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "如果列表是开关类型，是否可以点击",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "If the list is of switch type, can I click",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "footer",
      "types": "React.ReactNode",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "分组列表的底部文本或者自定义渲染",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Text at the bottom of the group list or custom rendering",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "theme",
      "types": "{  boardBg?: string;  iconColor?: string;  fontColor?: string;  subFontColor?: string;  descFontColor?: string;  cellLine?: string;  cellBg?: string;  cellRadius?: number;  margin?: number[] | number;  padding?: number[] | number;}",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "主题配置",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Theme configuration",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "data",
      "types": "Array<{  key?: string | number;  value?: string | number | boolean;  Action?: any;  title?: string | number;  subTitle?: string;  arrow?: boolean;  checked?: boolean;  disabled?: boolean;  onPress?: (idx: number) => void;  onValueChange?: (value: string) => void;}>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "数据源",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Data source",
            "defaultValue": "null"
          }
        }
      }
    }
  ],
  "TYSectionListProps": [
    {
      "optional": "true",
      "name": "scrollEnabled",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "内容是否可以滚动",
            "defaultValue": "true"
          },
          "en-US": {
            "language": "en-US",
            "description": "Can content scroll",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "容器样式",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>"
          },
          "en-US": {
            "language": "en-US",
            "description": "Container style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "headerStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "头部样式",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Header style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "contentContainerStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "应用于滚动视图内容容器，该容器包装了所有子视图",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>"
          },
          "en-US": {
            "language": "en-US",
            "description": "These styles will be applied to the scroll view content container which wraps all of the child views.",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "separatorStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "分割线样式",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Separator style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "sectionListRef",
      "types": "() => void",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "列表项实例",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "List item instance",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "useART",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "是否使用 ART 实现版本",
            "defaultValue": "false"
          },
          "en-US": {
            "language": "en-US",
            "description": "Is art used to implement the version",
            "defaultValue": "false"
          }
        }
      }
    }
  ],
  "TYSectionSliderProps": [
    {
      "optional": "false",
      "name": "theme",
      "types": "{  iconColor?: string;  descFontColor?: string;  cellBg?: string;  cellRadius?: number;  margin?: number[] | number;  padding?: number[] | number;  width?: number;  trackRadius?: number;  trackHeight?: number;  minimumTrackTintColor?: string;  maximumTrackTintColor?: string;  thumbSize?: number;  thumbRadius?: number;  thumbTintColor?: string;}",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "主题配置",
            "defaultValue": "{}"
          },
          "en-US": {
            "language": "en-US",
            "description": "Theme configuration",
            "defaultValue": "{}"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "iconType",
      "types": "'auto' | 'image' | 'iconfont' | 'text'",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "左侧 Icon 类型",
            "defaultValue": "'auto'"
          },
          "en-US": {
            "language": "en-US",
            "description": "Icon type on the left",
            "defaultValue": "'auto'"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "actionType",
      "types": "'auto' | 'image' | 'iconfont' | 'text'",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "右侧 Action 类型",
            "defaultValue": "'auto'"
          },
          "en-US": {
            "language": "en-US",
            "description": "Right action type",
            "defaultValue": "'auto'"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "iconSize",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "图标尺寸",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "The size of icon",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "iconColor",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "图标颜色",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "The Color of icon",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "Icon",
      "types": "any",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "左侧 Icon 具体值，当类型为 string时，默认使用 IconFont",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Icon specific value on the left. When the type is string, Iconfont is used by default",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "Action",
      "types": "any",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "右侧 Action 具体值，当类型为 string时，默认使用 TYText",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Specific value of action on the right. When the type is string, TYText is used by default",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "容器样式",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Container style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "contentStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "内容样式",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Content Style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "sliderStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "滑块样式",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Style of slider",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "textStyle",
      "types": "StyleProp<TextStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "文字样式",
            "type": "<a target=\"_blank\" href=\"https://reactnative.dev/docs/text-style-props\">StyleProp<TextStyle></a>",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Style of text",
            "type": "<a target=\"_blank\" href=\"https://reactnative.dev/docs/text-style-props\">StyleProp<TextStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "imageFollowIconColor",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "图片的 tintColor 是否跟随iconColor，默认为 true",
            "defaultValue": "true"
          },
          "en-US": {
            "language": "en-US",
            "description": "Whether the image's tintcolor follows icolor or not, the default is true",
            "defaultValue": "true"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "useART",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "是否使用 ART 实现版本",
            "defaultValue": "false"
          },
          "en-US": {
            "language": "en-US",
            "description": "Is art used to implement the version",
            "defaultValue": "false"
          }
        }
      }
    }
  ],
  "TYSectionCheckboxProps": [],
  "TYSectionSwitchProps": [],
  "TYTextProps": [
    {
      "optional": "true",
      "name": "type",
      "types": "'heading' | 'title' | 'paragraph'",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "字体类型",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Type of font",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "size",
      "types": "('large' | 'normal' | 'small') | number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "字体尺寸",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Size of font",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "align",
      "types": "'left' | 'center' | 'right'",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "字体对齐方式",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Font alignment",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "weight",
      "types": "number | string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "字体粗细",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Font weight",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "color",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "字体颜色",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Font color",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "text",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "defaultValue": "null"
          }
        }
      }
    }
  ],
  "UnitTextProps": [
    {
      "optional": "true",
      "name": "useART",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "是否使用 ART 形式展示",
            "defaultValue": "false"
          },
          "en-US": {
            "language": "en-US",
            "description": "是否使用 ART 形式展示",
            "defaultValue": "false"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "内容样式",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Container style",
            "type": "<a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "size",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "字体尺寸大小",
            "defaultValue": "82"
          },
          "en-US": {
            "language": "en-US",
            "description": "Font size",
            "defaultValue": "82"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "valueSize",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "具体值的尺寸大小",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Size of specific value",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "valueColors",
      "types": "string[]",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "定制每个值的颜色",
            "defaultValue": "[]"
          },
          "en-US": {
            "language": "en-US",
            "description": "Customize the color of each value",
            "defaultValue": "[]"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "valueColor",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "具体值的颜色",
            "defaultValue": "\"white\""
          },
          "en-US": {
            "language": "en-US",
            "description": "The color of the specific value",
            "defaultValue": "\"white\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "unit",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "单位",
            "defaultValue": "''"
          },
          "en-US": {
            "language": "en-US",
            "description": "Unit",
            "defaultValue": "''"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "unitSize",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "单位的尺寸大小",
            "defaultValue": "null"
          },
          "en-US": {
            "language": "en-US",
            "description": "Size of unit",
            "defaultValue": "null"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "unitColor",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "单位的颜色",
            "defaultValue": "\"white\""
          },
          "en-US": {
            "language": "en-US",
            "description": "The color of the unit",
            "defaultValue": "\"white\""
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "unitPaddingLeft",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "单位的左边距",
            "defaultValue": "0"
          },
          "en-US": {
            "language": "en-US",
            "description": "The left margin of the unit",
            "defaultValue": "0"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "unitPaddingTop",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "单位的上边距",
            "defaultValue": "0"
          },
          "en-US": {
            "language": "en-US",
            "description": "The top margin of the unit",
            "defaultValue": "0"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "unitType",
      "types": "'icon' | 'text'",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "单位的类型",
            "defaultValue": "'icon'"
          },
          "en-US": {
            "language": "en-US",
            "description": "Type of unit",
            "defaultValue": "'icon'"
          }
        }
      }
    },
    {
      "optional": "false",
      "name": "value",
      "types": "string | number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "具体值",
            "defaultValue": "undefined"
          },
          "en-US": {
            "language": "en-US",
            "description": "Value",
            "defaultValue": "undefined"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "letterWidth",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "自定义文字的宽度",
            "defaultValue": "0.55"
          },
          "en-US": {
            "language": "en-US",
            "description": "Custom text width",
            "defaultValue": "0.55"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "symbolWidth",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "自定义符号的宽度（如.,:等）",
            "defaultValue": "0.35"
          },
          "en-US": {
            "language": "en-US",
            "description": "Custom symbol width (e.g.,,: etc.)",
            "defaultValue": "0.35"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "symbols",
      "types": "string[]",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "被认作为 symbol 的字符串，并结合 symbolWidth 使用",
            "defaultValue": "['.', ':', ',']"
          },
          "en-US": {
            "language": "en-US",
            "description": "String recognized as symbol and used in combination with symbol width",
            "defaultValue": "['.', ':', ',']"
          }
        }
      }
    },
    {
      "optional": "true",
      "name": "svgMap",
      "types": "{}",
      "meta": {
        "base": {},
        "i18n": {
          "zh-CN": {
            "language": "zh-CN",
            "description": "额外的 svg 路径映射表，用于拓展内部的 svg path 或覆盖内部的 svg path",
            "defaultValue": "{}"
          },
          "en-US": {
            "language": "en-US",
            "description": "Additional SVG path mapping table is used to expand the internal SVG path or cover the internal SVG path",
            "defaultValue": "{}"
          }
        }
      }
    }
  ],
  "ThemeProps": [
    {
      "optional": "false",
      "name": "theme",
      "types": "{}"
    },
    {
      "optional": "false",
      "name": "children",
      "types": "React.ReactNode"
    }
  ],
  "ThemeProviderProps": [
    {
      "optional": "false",
      "name": "children",
      "types": "React.ReactNode"
    },
    {
      "optional": "false",
      "name": "theme",
      "types": "any"
    }
  ],
  "ThemeConsumerProps": [
    {
      "optional": "true",
      "name": "children",
      "types": "React.ReactNode"
    },
    {
      "optional": "true",
      "name": "theme",
      "types": "GlobalTheme"
    }
  ],
  "I18NLanMap": [
    {
      "optional": "false",
      "name": "en",
      "types": "Record<string, string>"
    },
    {
      "optional": "false",
      "name": "zh",
      "types": "Record<string, string>"
    }
  ],
  "DpSchema": [
    {
      "optional": "false",
      "name": "code",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "dptype",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "iconname",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "id",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "label",
      "types": "string[]",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "maxlen",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "max",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "min",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "false",
      "name": "mode",
      "types": "'rw' | 'ro' | 'rw'"
    },
    {
      "optional": "false",
      "name": "name",
      "types": "string"
    },
    {
      "optional": "true",
      "name": "range",
      "types": "any[]",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "scale",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "step",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "false",
      "name": "type",
      "types": "DpType"
    },
    {
      "optional": "true",
      "name": "unit",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {}
      }
    }
  ],
  "DevInfo": [
    {
      "optional": "false",
      "name": "ability",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "activeTime",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "appId",
      "types": "number",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "false",
      "name": "appKey",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "appOnline",
      "types": "boolean",
      "meta": {
        "base": {
          "desc": "网络是否在线"
        },
        "i18n": {}
      }
    },
    {
      "optional": "false",
      "name": "attribute",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "baseAttribute",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "bv",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "capability",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "category",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "categoryCode",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "cloudOnline",
      "types": "boolean"
    },
    {
      "optional": "false",
      "name": "codeIds",
      "types": "Record<string, string>"
    },
    {
      "optional": "false",
      "name": "communication",
      "types": "Record<string, any>"
    },
    {
      "optional": "false",
      "name": "devAttribute",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "deviceOnline",
      "types": "boolean",
      "meta": {
        "base": {
          "desc": "设备是否在线"
        },
        "i18n": {}
      }
    },
    {
      "optional": "false",
      "name": "deviceType",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "devId",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "displayDps",
      "types": "any[]"
    },
    {
      "optional": "false",
      "name": "displayMsgs",
      "types": "Record<string, any>"
    },
    {
      "optional": "false",
      "name": "displayOrder",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "dpMaxTime",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "dpName",
      "types": "Record<string | number, string>"
    },
    {
      "optional": "false",
      "name": "dps",
      "types": "Record<number, string>"
    },
    {
      "optional": "false",
      "name": "errorCode",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "faultDps",
      "types": "any[]"
    },
    {
      "optional": "false",
      "name": "gatewayVerCAD",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "gwType",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "homeDisplayOrder",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "homeId",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "i18nTime",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "iconUrl",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "idCodes",
      "types": "Record<number, string>"
    },
    {
      "optional": "false",
      "name": "ip",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "isAdmin",
      "types": "boolean"
    },
    {
      "optional": "false",
      "name": "isCloudOnline",
      "types": "boolean"
    },
    {
      "optional": "false",
      "name": "isLocalOnline",
      "types": "boolean",
      "meta": {
        "base": {
          "desc": "局域网是否在线"
        },
        "i18n": {}
      }
    },
    {
      "optional": "false",
      "name": "isMeshBleOnline",
      "types": "boolean"
    },
    {
      "optional": "false",
      "name": "isNewFirmware",
      "types": "boolean"
    },
    {
      "optional": "false",
      "name": "isShare",
      "types": "boolean"
    },
    {
      "optional": "false",
      "name": "isUniversalPanel",
      "types": "boolean"
    },
    {
      "optional": "false",
      "name": "isVDevice",
      "types": "boolean"
    },
    {
      "optional": "false",
      "name": "latitude",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "localKey",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "longitude",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "lpv",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "meshId",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "name",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "networkType",
      "types": "NetworkType"
    },
    {
      "optional": "false",
      "name": "originJson",
      "types": "Record<string, any>"
    },
    {
      "optional": "false",
      "name": "panelConfig",
      "types": "{  bic: Array<{    code: string;    selected: boolean;    value?: string;  }>;  fun?: Record<string, any>;}"
    },
    {
      "optional": "false",
      "name": "pcc",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "productId",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "protocolAttribute",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "pv",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "quickOpDps",
      "types": "any[]"
    },
    {
      "optional": "false",
      "name": "rnFind",
      "types": "boolean"
    },
    {
      "optional": "false",
      "name": "roomId",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "runtimeEnv",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "schema",
      "types": "{ [K in keyof S]: DpSchema }"
    },
    {
      "optional": "false",
      "name": "schemaExt",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "sharedTime",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "sigmeshId",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "standard",
      "types": "boolean"
    },
    {
      "optional": "false",
      "name": "standSchemaModel",
      "types": "Record<string, any>"
    },
    {
      "optional": "false",
      "name": "state",
      "types": "S"
    },
    {
      "optional": "false",
      "name": "supportGroup",
      "types": "boolean"
    },
    {
      "optional": "false",
      "name": "supportSGroup",
      "types": "boolean"
    },
    {
      "optional": "false",
      "name": "timezoneId",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "ui",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "uiId",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "uiPhase",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "uiType",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "uiVersion",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "upgrading",
      "types": "boolean"
    },
    {
      "optional": "false",
      "name": "uuid",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "vendorInfo",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "verSw",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "virtual",
      "types": "boolean"
    }
  ],
  "MobileInfo": [
    {
      "optional": "false",
      "name": "appRnVersion",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "appVersion",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "celsius",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "countryCode",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "ele",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "iconfontNameMap",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "lang",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "lat",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "lon",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "os",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "osSystem",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "phoneCode",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "platform",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "service",
      "types": "MobileService"
    },
    {
      "optional": "false",
      "name": "t",
      "types": "number"
    },
    {
      "optional": "false",
      "name": "timezoneId",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "ttid",
      "types": "string"
    }
  ],
  "DeprecatedNavigatorRoute": [
    {
      "optional": "false",
      "name": "id",
      "types": "string"
    }
  ],
  "DeprecatedNavigator": [
    {
      "optional": "false",
      "name": "getCurrentRoutes",
      "types": "DeprecatedNavigatorRoute[]"
    },
    {
      "optional": "false",
      "name": "immediatelyResetRouteStack",
      "types": "void"
    },
    {
      "optional": "false",
      "name": "jumpBack",
      "types": "void"
    },
    {
      "optional": "false",
      "name": "jumpForward",
      "types": "void"
    },
    {
      "optional": "false",
      "name": "jumpTo",
      "types": "void"
    },
    {
      "optional": "false",
      "name": "pop",
      "types": "void"
    },
    {
      "optional": "false",
      "name": "popN",
      "types": "void"
    },
    {
      "optional": "false",
      "name": "popToRoute",
      "types": "void"
    },
    {
      "optional": "false",
      "name": "popToTop",
      "types": "void"
    },
    {
      "optional": "false",
      "name": "push",
      "types": "void"
    },
    {
      "optional": "false",
      "name": "replace",
      "types": "void"
    },
    {
      "optional": "false",
      "name": "replaceAtIndex",
      "types": "void"
    },
    {
      "optional": "false",
      "name": "replacePrevious",
      "types": "void"
    }
  ],
  "LinearGradientBackgroundOffset": [],
  "NavigationOptions": [
    {
      "optional": "false",
      "name": "style",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "background",
      "types": "number | string | {  uri: string;} | RadialGradientBackground | (LinearGradientBackground & LinearGradientBackgroundOffset)",
      "meta": {
        "base": {
          "label": "`LinearGradientBackground` 渲染线性渐变"
        },
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "topbarStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "topbarTextStyle",
      "types": "StyleProp<TextStyle>",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "backgroundStyle",
      "types": "StyleProp<ViewStyle>",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "title",
      "types": "string",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "hideTopbar",
      "types": "boolean"
    },
    {
      "optional": "true",
      "name": "showOfflineView",
      "types": "boolean",
      "meta": {
        "base": {
          "defaultValueValue": "true"
        },
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "gesture",
      "types": "boolean",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "enablePopGesture",
      "types": "boolean",
      "meta": {
        "base": {
          "defaultValueValue": "true"
        },
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "isBleOfflineOverlay",
      "types": "boolean",
      "meta": {
        "base": {
          "desc": "蓝牙离线提示是否覆盖整个面板(除头部栏外)",
          "defaultValueValue": "true"
        },
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "renderTopBar",
      "types": "() => JSX.Element",
      "meta": {
        "base": {},
        "i18n": {}
      }
    },
    {
      "optional": "true",
      "name": "renderStatusBar",
      "types": "() => JSX.Element",
      "meta": {
        "base": {},
        "i18n": {}
      }
    }
  ],
  "NavigationRoute": [
    {
      "optional": "false",
      "name": "name",
      "types": "string"
    },
    {
      "optional": "false",
      "name": "component",
      "types": "React.ComponentType"
    },
    {
      "optional": "true",
      "name": "options",
      "types": "StackNavigationOptions | ((props: {  route: RouteProp<ParamListBase, string>;  navigation: any;}) => StackNavigationOptions) | NavigationOptions"
    }
  ],
  "NavigationParam": [
    {
      "optional": "false",
      "name": "router",
      "types": "NavigationRoute[]"
    },
    {
      "optional": "true",
      "name": "screenOptions",
      "types": "ScreenOptions"
    }
  ],
  "NavigationComponentClass": [],
  "StringType": []
}