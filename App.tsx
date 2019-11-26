import React, { useState } from 'react';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import RobotoReqular from './assets/fonts/Roboto-Regular.ttf';
import RobotoBold from './assets/fonts/Roboto-Bold.ttf';
import { MainLayout } from './src/MainLayout';
import { TodoProvider } from './src/context/todo/TodoProvider';
import { ScreenProvider } from './src/context/screen/ScreenProvider';

function loadApplication(): Promise<void> {
  return Font.loadAsync({
    'roboto-regular': RobotoReqular,
    'roboto-bold': RobotoBold,
  });
}

export default function App(): JSX.Element {
  const [isReady, setReady] = useState(false);

  if (!isReady) {
    return <AppLoading startAsync={loadApplication} onFinish={() => setReady(true)} />;
  }

  return (
    <ScreenProvider>
      <TodoProvider>
        <MainLayout />
      </TodoProvider>
    </ScreenProvider>
  );
}
