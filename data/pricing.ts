import { PricingTier } from '@/lib/types';

export const pricingTiers: PricingTier[] = [
    {
        id: 'starter',
        name: 'Basic',
        price: '300K',
        period: 'mulai dari / proyek',
        features: [
            '1 Layanan (pilihan)',
            'Revisi 2x',
            'Pengerjaan 3-5 hari',
            'Konsultasi WhatsApp',
        ],
        featured: false,
    },
    {
        id: 'professional',
        name: 'Pro',
        price: '750K',
        period: 'mulai dari / proyek',
        features: [
            '2 Layanan kombinasi',
            'Revisi tidak terbatas',
            'Pengerjaan 1-3 hari',
            'Prioritas antrian',
            'Meeting langsung',
        ],
        featured: true,
    },
    {
        id: 'enterprise',
        name: 'Custom',
        price: 'Custom',
        period: 'negosiasi sesuai kebutuhan',
        features: [
            'Semua layanan',
            'Tim dedicated',
            'SLA terjamin',
            'Maintenance bulanan',
            'Kontrak resmi',
        ],
        featured: false,
    },
];
