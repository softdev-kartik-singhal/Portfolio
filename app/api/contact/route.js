import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // In a real application, you would send an email here using Nodemailer or a similar service.
        // For this portfolio, we'll log the data to the console to simulate a successful submission.
        console.log('Contact Form Submission:', { name, email, message });

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
