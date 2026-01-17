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
            <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-20">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-phrm-dark/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-blue-400/10 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center mb-4">
                            <BookOpen className="w-12 h-12 text-phrm-dark animate-bounce" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Blog PHRM</h2>
                        <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">Découvrez nos dernières actualités et articles sur la gestion RH</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        <BlogCategoryCard
                            title="Actualités RH"
                            icon={BookOpen}
                            color="blue"
                            description="Restez informé des dernières tendances et actualités dans le domaine des ressources humaines au Cameroun."
                            delay={0}
                        />
                        <BlogCategoryCard
                            title="Conseils & Astuces"
                            icon={Target}
                            color="green"
                            description="Des conseils pratiques et des astuces pour optimiser votre gestion des ressources humaines."
                            delay={100}
                        />
                        <BlogCategoryCard
                            title="Expertise PHRM"
                            icon={Award}
                            color="purple"
                            description="Partage d'expertise et de connaissances par notre équipe de spécialistes en gestion RH."
                            delay={200}
                            extraClass="md:col-span-2 lg:col-span-1"
                        />
                    </div>

                    <div className="text-center animate-fade-in-up animation-delay-300">
                        <div className="bg-gradient-to-r from-phrm-dark to-blue-700 rounded-2xl p-8 md:p-12 text-black shadow-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Explorez notre blog</h3>
                            <p className="text-blue-500 mb-8 text-lg max-w-2xl mx-auto">Découvrez des articles régulièrement mis à jour sur la gestion des ressources humaines, la conformité CNPS, et bien plus encore.</p>
                            <a href="https://phrmapp.com/blog" className="inline-flex items-center gap-2 bg-white text-phrm-dark px-8 py-4 rounded-lg hover:bg-phrm-light transition-all transform hover:scale-105 shadow-lg font-semibold text-lg">
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
                                <BookOpen className="w-12 h-12 text-phrm-dark animate-bounce" />
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Articles Récents</h2>
                            <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">Découvrez nos dernières publications sur la gestion RH</p>
                        </div>

                        {loadingPosts ? (
                            <div className="flex justify-center items-center py-12">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-phrm-dark"></div>
                            </div>
                        ) : (
                            <>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    {recentPosts.slice(0, 6).map((post, index) => (
                                        <article
                                            key={post.id}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden group animate-fade-in-up"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="p-6 space-y-4">
                                                <div className="flex items-center gap-3 text-xs text-gray-500">
                                                    <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full">
                                                        <Calendar className="w-3 h-3 text-blue-600" />
                                                        <span className="text-blue-700 font-medium">{formatDate(post.createdAt)}</span>
                                                    </div>
                                                    {post.likes > 0 && (
                                                        <div className="flex items-center gap-1.5 bg-red-50 px-3 py-1 rounded-full">
                                                            <Heart className="w-3 h-3 text-red-600 fill-current" />
                                                            <span className="text-red-700 font-medium">{post.likes}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-phrm-dark transition-colors line-clamp-2">{post.title}</h3>
                                                <div
                                                    className="text-gray-600 text-sm leading-relaxed line-clamp-3"
                                                    dangerouslySetInnerHTML={{ __html: truncateText(post.content?.replace(/\n/g, ' ') || '', 150) }}
                                                />
                                                <a href="https://phrmapp.com/blog" className="inline-flex items-center gap-2 text-phrm-dark font-semibold hover:gap-3 transition-all group-hover:text-blue-700">
                                                    Lire la suite
                                                    <ArrowRight className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                                <div className="text-center animate-fade-in-up animation-delay-300">
                                    <a href="https://phrmapp.com/blog" className="inline-flex items-center gap-2 bg-phrm-dark text-white px-8 py-4 rounded-lg hover:bg-phrm-dark/90 transition-all transform hover:scale-105 shadow-lg font-semibold text-lg">
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

const BlogCategoryCard = ({ title, icon: Icon, color, description, delay, extraClass = "" }: any) => {
    const gradient = color === 'blue' ? 'from-blue-500 to-blue-600' : (color === 'green' ? 'from-green-500 to-green-600' : 'from-purple-500 to-purple-600');
    const hoverColor = color === 'blue' ? 'group-hover:text-blue-700' : (color === 'green' ? 'group-hover:text-green-700' : 'group-hover:text-purple-700');

    return (
        <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-fade-in-up animation-delay-${delay} ${extraClass}`}>
            <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center mb-4 group-hover:animate-bounce`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-phrm-dark transition-colors">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <a href="https://phrmapp.com/blog" className={`inline-flex items-center gap-2 text-phrm-dark font-semibold hover:gap-3 transition-all ${hoverColor}`}>
                {color === 'blue' ? 'Lire les articles' : (color === 'green' ? 'Découvrir' : 'En savoir plus')}
                <ArrowRight className="w-5 h-5" />
            </a>
        </div>
    );
};
