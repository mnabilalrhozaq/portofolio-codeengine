import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/schemas';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate request body
        const validatedData = contactSchema.parse(body);

        // TODO: Backend team implements:
        // 1. Send email notification to company
        // 2. Send confirmation email to user
        // 3. Save to database for record keeping
        // 4. Trigger webhooks (e.g., Slack notification, CRM integration)
        // 5. Add rate limiting to prevent spam

        // Example implementation:
        // await sendEmail({
        //   to: process.env.CONTACT_EMAIL,
        //   subject: `New contact form submission from ${validatedData.name}`,
        //   body: `
        //     Name: ${validatedData.name}
        //     Email: ${validatedData.email}
        //     Phone: ${validatedData.phone || 'N/A'}
        //     Service: ${validatedData.service}
        //     Message: ${validatedData.message}
        //   `
        // });

        // For now, just log the data
        console.log('Contact form submission:', validatedData);

        return NextResponse.json(
            {
                success: true,
                message: 'Message sent successfully. We will get back to you soon!'
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);

        if (error instanceof Error && error.name === 'ZodError') {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Invalid form data. Please check your inputs.'
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: false,
                error: 'An error occurred while processing your request. Please try again later.'
            },
            { status: 500 }
        );
    }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
    return NextResponse.json(
        {},
        {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        }
    );
}
