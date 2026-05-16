import { Service } from '@/lib/types';

export const services: Service[] = [
    {
        id: 'web-development',
        icon: 'Code2',
        title: 'Web Development',
        description: 'Custom web applications built with modern technologies and best practices.',
        features: [
            'Responsive Design',
            'Performance Optimization',
            'SEO Friendly',
            'Cross-browser Compatible',
        ],
    },
    {
        id: 'mobile-apps',
        icon: 'Smartphone',
        title: 'Mobile Apps',
        description: 'Native and cross-platform mobile applications for iOS and Android.',
        features: [
            'React Native',
            'Flutter Development',
            'App Store Deployment',
            'Push Notifications',
        ],
    },
    {
        id: 'ui-ux-design',
        icon: 'Palette',
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces that users love to interact with.',
        features: [
            'User Research',
            'Wireframing & Prototyping',
            'Design Systems',
            'Usability Testing',
        ],
    },
    {
        id: 'cloud-solutions',
        icon: 'Cloud',
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and deployment solutions.',
        features: [
            'AWS & Azure',
            'DevOps & CI/CD',
            'Serverless Architecture',
            'Cloud Migration',
        ],
    },
    {
        id: 'digital-marketing',
        icon: 'TrendingUp',
        title: 'Digital Marketing',
        description: 'Data-driven marketing strategies to grow your online presence.',
        features: [
            'SEO & SEM',
            'Social Media Marketing',
            'Content Strategy',
            'Analytics & Reporting',
        ],
    },
    {
        id: 'consulting',
        icon: 'Users',
        title: 'Consulting',
        description: 'Expert guidance to help you make the right technology decisions.',
        features: [
            'Technology Assessment',
            'Architecture Planning',
            'Team Training',
            'Project Management',
        ],
    },
];
