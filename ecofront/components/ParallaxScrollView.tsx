import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView'; // Adjust import path accordingly

type Props = {
  headerBackgroundColor: { dark: string; light: string };
  children: React.ReactNode;
};

export default function NormalScrollView({ children, headerBackgroundColor }: Props) {
  return (
    <ThemedView style={[styles.container, { backgroundColor: headerBackgroundColor.light }]}>
      <ScrollView contentContainerStyle={styles.content}>
        {children}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 32,

  },
});
