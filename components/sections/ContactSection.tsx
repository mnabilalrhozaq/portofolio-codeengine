'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { contactSchema, ContactFormData } from '@/lib/schemas';
import { cn } from '@/lib/utils';

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // TODO: Replace with actual API call
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log('Form data:', data);

            setSubmitStatus('success');
            reset();
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-4 inline-block rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700"
                    >
                        Get in Touch
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl"
                    >
                        Let's Start a Conversation
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="mx-auto max-w-2xl text-lg text-gray-600"
                    >
                        Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
                    </motion.p>
                </div>

                {/* Content Grid */}
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="mb-6 font-serif text-2xl font-bold text-gray-900">
                                Contact Information
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We're here to help and answer any question you might have. We look forward to hearing from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Email</div>
                                    <a
                                        href="mailto:hello@codeengine.com"
                                        className="text-gray-600 transition-colors hover:text-sky-600"
                                    >
                                        hello@codeengine.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Phone</div>
                                    <a
                                        href="tel:+1234567890"
                                        className="text-gray-600 transition-colors hover:text-sky-600"
                                    >
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">Office</div>
                                    <p className="text-gray-600">
                                        123 Innovation Street<br />
                                        San Francisco, CA 94102
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name and Email Row */}
                            <div className="grid gap-6 sm:grid-cols-2">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-900">
                                        Name *
                                    </label>
                                    <input
                                        {...register('name')}
                                        type="text"
                                        id="name"
                                        className={cn(
                                            'w-full rounded-xl border-2 bg-white px-4 py-3 text-gray-900 transition-all duration-300',
                                            'focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10',
                                            errors.name ? 'border-red-300' : 'border-gray-200'
                                        )}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-900">
                                        Email *
                                    </label>
                                    <input
                                        {...register('email')}
                                        type="email"
                                        id="email"
                                        className={cn(
                                            'w-full rounded-xl border-2 bg-white px-4 py-3 text-gray-900 transition-all duration-300',
                                            'focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10',
                                            errors.email ? 'border-red-300' : 'border-gray-200'
                                        )}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-900">
                                    Phone
                                </label>
                                <input
                                    {...register('phone')}
                                    type="tel"
                                    id="phone"
                                    className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 transition-all duration-300 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10"
                                    placeholder="+1 (234) 567-890"
                                />
                            </div>

                            {/* Service */}
                            <div>
                                <label htmlFor="service" className="mb-2 block text-sm font-semibold text-gray-900">
                                    Service *
                                </label>
                                <select
                                    {...register('service')}
                                    id="service"
                                    className={cn(
                                        'w-full rounded-xl border-2 bg-white px-4 py-3 text-gray-900 transition-all duration-300',
                                        'focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10',
                                        errors.service ? 'border-red-300' : 'border-gray-200'
                                    )}
                                >
                                    <option value="">Select a service</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="mobile-apps">Mobile Apps</option>
                                    <option value="ui-ux-design">UI/UX Design</option>
                                    <option value="cloud-solutions">Cloud Solutions</option>
                                    <option value="digital-marketing">Digital Marketing</option>
                                    <option value="consulting">Consulting</option>
                                </select>
                                {errors.service && (
                                    <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-900">
                                    Message *
                                </label>
                                <textarea
                                    {...register('message')}
                                    id="message"
                                    rows={5}
                                    className={cn(
                                        'w-full rounded-xl border-2 bg-white px-4 py-3 text-gray-900 transition-all duration-300',
                                        'focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10',
                                        errors.message ? 'border-red-300' : 'border-gray-200'
                                    )}
                                    placeholder="Tell us about your project..."
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group flex w-full items-center justify-center gap-2 rounded-full bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </>
                                )}
                            </button>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 rounded-xl bg-green-50 p-4 text-green-800"
                                >
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="text-sm font-medium">
                                        Message sent successfully! We'll get back to you soon.
                                    </span>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-red-800"
                                >
                                    <AlertCircle className="h-5 w-5" />
                                    <span className="text-sm font-medium">
                                        Something went wrong. Please try again.
                                    </span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
