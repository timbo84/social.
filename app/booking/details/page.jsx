import { Suspense } from "react";
import BookingDetailsClient from "./BookingDetailsClient";

export default function BookingDetailsPage() {
  return (
    <Suspense fallback={<div>Loading booking details...</div>}>
      <BookingDetailsClient />
    </Suspense>
  );
}