# cl-icons

> ⚠️ **경고: 이 패키지는 더 이상 운영되지 않습니다.**  
> 이 패키지는 더 이상 유지보수되지 않으며, 새로운 기능이나 버그 수정이 제공되지 않습니다.  
> 기존 사용자는 다른 아이콘 라이브러리로의 마이그레이션을 고려해주시기 바랍니다.

<div align="center">
  <img src="https://placeholder.svg?height=150&width=150" alt="cl-icons logo" width="150" />
  <h3>Conversion Lab Icon Library</h3>
  <p>A comprehensive icon set for the Conversion Lab design system</p>
</div>

---

## 📦 Installation

Install the package using npm:

```bash
npm install cl-icons
```

Or using yarn:

```bash
yarn add cl-icons
```

## 🚀 Usage

### React

Import the icons you need in your React components:

```jsx
import { ArrowLeft, Calendar, ChartLine } from "cl-icons";

function MyComponent() {
  return (
    <div>
      <ArrowLeft size={24} color="#333" />
      <Calendar size={32} color="blue" />
      <ChartLine size="2em" color="var(--primary-color)" />
    </div>
  );
}
```

### React Native

For React Native, you'll need to use [react-native-svg](https://github.com/react-native-svg/react-native-svg) to render the SVG icons:

```bash
# Install the required dependency
npm install react-native-svg

# or with yarn
yarn add react-native-svg
```

Then import and use icons in your React Native components:

```jsx
import { ArrowLeft, Calendar, ChartLine } from "cl-icons";

function MyComponent() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <ArrowLeft size={24} color="#333" />
      <Calendar size={32} color="blue" />
      <ChartLine size={24} color="#4CAF50" />
    </View>
  );
}
```

## 🎨 Customization

Each icon component accepts the following props:

- `size`: number | string (default: 24)
- `color`: string (default: "currentColor")
- `fill`: string (for React Native)
- `stroke`: string (for React Native)
- `strokeWidth`: number | string (for React Native)
- `opacity`: number (for React Native)

You can also pass any valid SVG props to customize the icons further.

## 📋 Available Icons

Here's a list of all available icons:

- ArrowLeft
- ArrowRight
- Calendar
- ChartLine
- ChevronDown
- ChevronLeft
- ChevronRight
- ChevronUp
- CircleHelp
- CirclePlus
- CircleX
- Clock
- Copy
- Download
- Ellipsis
- FileText
- Folder
- Image
- Info
- LogIn
- LogOut
- MapPin
- Paperclip
- Pause
- Pencil
- Phone
- Play
- Plus
- Search
- Settings
- Share
- Trash
- Upload
- Volume
- X

... and many more!

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to submit pull requests, report issues, or request new features.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Made with ❤️ by the Conversion Lab Team
</div>
```

Now, let's create a simple example component to demonstrate how to use the icons:

```tsx project="cl-icons" file="example.tsx" type="react"
import React from "react";
import { ArrowLeft, Calendar, ChartLine, CircleHelp, Settings } from "cl-icons";

export default function IconExample() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">cl-icons Example</h1>
      <div className="flex space-x-4">
        <ArrowLeft size={24} color="#333" />
        <Calendar size={32} color="blue" />
        <ChartLine size="2em" color="green" />
        <CircleHelp size={28} color="#FF6B6B" />
        <Settings size={36} color="#4A4A4A" />
      </div>
      <p className="mt-8 text-gray-600">
        These are just a few examples from the cl-icons library.
      </p>
    </div>
  );
}
```
