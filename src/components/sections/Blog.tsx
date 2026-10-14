import * as React from 'react';
import { BookOpen, Target, Award, ArrowRight, Calendar, Heart } from 'lucide-react';
import { formatDate } from '../../utils/date';
import { truncateText } from '../../utils/text';

interface BlogProps {
    recentPosts: any[];
    loadingPosts: boolean;
}

export const Blog: React.FC<BlogProps> = ({ recentPosts, loadingPosts }) => {
    return (
        <>
            <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-phrm-bg relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-20">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-phrm-navy/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-phrm-sky/20 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center mb-4">
                            <BookOpen className="w-12 h-12 text-phrm-navy" />
                        </div>
                        <h2 className="text-4xl font-bold text-phrm-text mb-4 animate-fade-in-up">Blog PHRM</h2>
                        <p className="text-xl text-phrm-muted animate-fade-in-up animation-delay-200">Découvrez nos dernières actualités et articles sur la gestion RH</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <BlogCategoryCard
                            title="Actualités RH"
                            icon={BookOpen}
                            label="Lire les articles"
                            description="Restez informé des dernières tendances et actualités dans le domaine des ressources humaines au Cameroun."
                            delay={0}
                        />
                        <BlogCategoryCard
                            title="Conseils & Astuces"
                            icon={Target}
                            label="Découvrir"
                            description="Des conseils pratiques et des astuces pour optimiser votre gestion des ressources humaines."
                            delay={100}
                        />
                        <BlogCategoryCard
                            title="Expertise PHRM"
                            icon={Award}
                            label="En savoir plus"
                            description="Partage d'expertise et de connaissances par notre équipe de spécialistes en gestion RH."
                            delay={200}
                            extraClass="md:col-span-2 lg:col-span-1"
                        />
                    </div>

                    <div className="text-center animate-fade-in-up animation-delay-300">
                        <div className="bg-phrm-navy rounded-2xl p-8 md:p-12 text-white shadow-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Explorez notre blog</h3>
                            <p className="text-phrm-pale mb-8 text-lg max-w-2xl mx-auto">Découvrez des articles régulièrement mis à jour sur la gestion des ressources humaines, la conformité CNPS, et bien plus encore.</p>
                            <a href="https://blog.phrm.app" className="inline-flex items-center gap-2 bg-white text-phrm-navy px-8 py-4 rounded-lg hover:bg-phrm-sky transition-all transform hover:scale-105 shadow-lg font-semibold text-lg">
                                <BookOpen className="w-5 h-5" />
                                Accéder au blog
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {recentPosts.length > 0 && (
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center mb-4">
                                <BookOpen className="w-12 h-12 text-phrm-navy" />
                            </div>
                            <h2 className="text-4xl font-bold text-phrm-text mb-4 animate-fade-in-up">Articles Récents</h2>
                            <p className="text-xl text-phrm-muted animate-fade-in-up animation-delay-200">Découvrez nos dernières publications sur la gestion RH</p>
                        </div>

                        {loadingPosts ? (
                            <div className="flex justify-center items-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-phrm-navy"></div>
                            </div>
                        ) : (
                            <>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    {recentPosts.slice(0, 6).map((post, index) => (
                                        <article
                                            key={post.id}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-phrm-pale overflow-hidden group animate-fade-in-up"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="p-6 space-y-4">
                                                <div className="flex items-center gap-3 text-xs text-phrm-muted">
                                                    <div className="flex items-center gap-1.5 bg-phrm-sky/20 px-3 py-1 rounded-full">
                                                        <Calendar className="w-3 h-3 text-phrm-navy" />
                                                        <span className="text-phrm-navy font-medium">{formatDate(post.createdAt)}</span>
                                                    </div>
                                                    {post.likes > 0 && (
                                                        <div className="flex items-center gap-1.5 bg-status-error/10 px-3 py-1 rounded-full">
                                                            <Heart className="w-3 h-3 text-status-error fill-current" />
                                                            <span className="text-status-error font-medium">{post.likes}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <h3 className="text-xl font-bold text-phrm-text group-hover:text-phrm-navy transition-colors line-clamp-2">{post.title}</h3>
                                                <div
                                                    className="text-phrm-muted text-sm leading-relaxed line-clamp-3"
                                                    dangerouslySetInnerHTML={{ __html: truncateText(post.content?.replace(/\n/g, ' ') || '', 150) }}
                                                />
                                                <a href="https://blog.phrm.app" className="inline-flex items-center gap-2 text-phrm-navy font-semibold hover:gap-3 transition-all group-hover:text-phrm-navy">
                                                    Lire la suite
                                                    <ArrowRight className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                                <div className="text-center animate-fade-in-up animation-delay-300">
                                    <a href="https://blog.phrm.app" className="inline-flex items-center gap-2 bg-phrm-navy text-white px-8 py-4 rounded-lg hover:bg-phrm-navy/90 transition-all transform hover:scale-105 shadow-lg font-semibold text-lg">
                                        <BookOpen className="w-5 h-5" />
                                        Voir tous les articles
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                </section>
            )}
        </>
    );
};

const BlogCategoryCard = ({ title, icon: Icon, label, description, delay, extraClass = "" }: any) => {
    return (
        <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in-up animation-delay-${delay} ${extraClass}`}>
            <div className="w-12 h-12 bg-phrm-navy rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-phrm-text mb-3 group-hover:text-phrm-navy transition-colors">{title}</h3>
            <p className="text-phrm-muted mb-6">{description}</p>
            <a href="https://blog.phrm.app" className="inline-flex items-center gap-2 text-phrm-navy font-semibold hover:gap-3 transition-all">
                {label}
                <ArrowRight className="w-5 h-5" />
            </a>
        </div>
    );
};
