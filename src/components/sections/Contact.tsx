import * as React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-phrm-dark to-phrm-dark">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up">Prêt à moderniser votre gestion RH ?</h2>
                    <p className="text-xl text-blue-500 mb-8 animate-fade-in-up animation-delay-200">Rejoignez les centaines d'entreprises camerounaises qui nous font confiance</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <ContactCard icon={Mail} title="Email" detail="sarlphrm17@gmail.com" note="Réponse sous 24h" delay={0} />
                    <ContactCard icon={Phone} title="Téléphone" detail="+237 6 91313674" note="Lun - Ven: 8h00 - 18h00" delay={100} />
                    <ContactCard icon={MapPin} title="Adresse" detail="Yaoundé, Cameroun" note="Bureau principal" delay={200} />
                </div>

                <div className="text-center animate-fade-in-up animation-delay-300">
                    <div className="flex justify-center space-x-6">
                        <SocialIcon icon={Facebook} />
                        <SocialIcon icon={Twitter} />
                        <SocialIcon icon={Linkedin} />
                        <SocialIcon icon={MessageCircle} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactCard = ({ icon: Icon, title, detail, note, delay }: any) => (
    <div className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 group animate-fade-in-up animation-delay-${delay}`}>
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
            <Icon className="w-8 h-8 text-blue-500" />
        </div>
        <h3 className="text-xl font-bold text-blue-500 mb-4">{title}</h3>
        <p className="text-blue-400 mb-4">{detail}</p>
        <p className="text-sm text-blue-300">{note}</p>
    </div>
);

const SocialIcon = ({ icon: Icon }: any) => (
    <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
        <Icon className="w-6 h-6 text-white" />
    </a>
);
