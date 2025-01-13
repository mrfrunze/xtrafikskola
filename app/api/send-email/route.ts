import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// POST запрос для отправки данных формы на почту
export async function POST(request: Request) {
    try {
        const { name, phone, email, comment } = await request.json();

        // Настройка почтового сервера
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Укажи свои данные
                pass: process.env.EMAIL_PASS, // Используй пароль приложения
            },
        });

        // Отправка письма
        await transporter.sendMail({
            from: `"xTrafikSkola" <${process.env.EMAIL_USER}>`,
            to: "stoynov.oleg@gmail.com", // Укажи свою почту для тестирования
            subject: "Ny bokning från xTrafikSkola",
            text: `Namn: ${name}\nTelefon: ${phone}\nEmail: ${email}\nKommentar: ${comment}`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, error: "Failed to send email." });
    }
}
