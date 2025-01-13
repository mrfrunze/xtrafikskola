"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

// Схема валидации через Zod
const formSchema = z.object({
    name: z.string().min(2, "Namn måste innehålla minst 2 tecken."),
    phone: z.string().min(10, "Telefonnummer måste innehålla minst 10 siffror."),
    email: z.string().email("Ogiltig e-postadress."),
    comment: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const Popup = ({ isOpen, onClose }: PopupProps) => {
    const { toast } = useToast();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            await axios.post("/api/send-email", data);
            toast({
                title: "✅ Formuläret har skickats!",
                description: "Ditt meddelande har skickats framgångsrikt.",
            });
            reset();
            onClose();
        } catch (error) {
            console.error("Error:", error);
            toast({
                title: "❌ Fel vid skickande",
                description: "Något gick fel, försök igen senare.",
                variant: "destructive",
            });
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Boka Intensivkurs</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <input {...register("name")} placeholder="Ditt namn" className="p-2 border rounded-md" />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                    <input {...register("phone")} placeholder="Ditt telefonnummer" className="p-2 border rounded-md" />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

                    <input {...register("email")} placeholder="Din e-postadress" className="p-2 border rounded-md" />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <textarea {...register("comment")} placeholder="Kommentar (valfritt)" className="p-2 border rounded-md" />

                    <Button type="submit" className="mt-4 w-full">Skicka</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default Popup;
