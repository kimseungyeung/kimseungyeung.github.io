import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'android',
    name: 'Android',
    accentColor: '#00d4ff',
    skills: [
      'Kotlin',
      'Java',
      'MVVM',
      'MVC',
      'Jetpack Compose',
      'DataBinding',
      'LiveData',
      'Retrofit',
      'Volley',
      'Firebase',
      'FCM',
      'Socket.IO',
    ],
  },
  {
    id: 'ios',
    name: 'iOS',
    accentColor: '#6366f1',
    skills: ['Swift', 'SwiftUI', 'Alamofire'],
  },
  {
    id: 'vehicle-hardware',
    name: 'Vehicle / Hardware',
    accentColor: '#10b981',
    skills: [
      'Serial RS232',
      'Bluetooth',
      'GPS / GNSS',
      'HDMI',
      'DMB',
      'Hardware I/O',
    ],
  },
  {
    id: 'backend-ai',
    name: 'Backend / AI',
    accentColor: '#f59e0b',
    skills: ['Spring Boot', 'Spring', 'Thymeleaf', 'Deep Learning', 'DL4J'],
  },
  {
    id: 'web-service',
    name: 'Web / Service',
    accentColor: '#8b5cf6',
    skills: [
      'React',
      'TypeScript',
      'Vite',
      'Firebase',
      'Firestore',
      'Firebase Storage',
      'Firebase Functions',
      'Cloudflare',
    ],
  },
];
