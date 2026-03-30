import { Suspense } from "react";
import ContactForm from "./ContactFormTemp";

export default function Contact(){
return ( 
    <Suspense fallback={<div>loading</div>}>
        <ContactForm />
        </Suspense>
        ); 
}
