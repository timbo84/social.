"use client";

import { useSearchParams } from "next/navigation";
import BookingForm from "@/app/components/BookingDetails/BookingForm";

export default function BookingDetailsClient() {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date");
  const initialDate = dateParam ? new Date(dateParam) : null;

  return <BookingForm initialDate={initialDate} />;
}