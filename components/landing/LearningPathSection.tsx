
'use client';

import { ArrowRight, Code, Palette, TrendingUp, Users } from 'lucide-react';

const learningPaths = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Master modern web technologies from HTML/CSS to advanced React and Next.js',
    resources: 24,
    level: 'Beginner to Advanced',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Learn design principles, Figma, and user experience best practices',
    resources: 18,
    level: 'All Levels',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Business & Leadership',
    description: 'Develop leadership skills and business acumen for career growth',
    resources: 15,
    level: 'Intermediate',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Users,
    title: 'Communication Skills',
    description: 'Enhance your communication, presentation, and interpersonal abilities',
    resources: 12,
    level: 'All Levels',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function LearningPathSection() {
  return (
    <section className="w-full bg-gradient-to-r from-gray-50 to-purple-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore <span className="text-purple-600">Learning Paths</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Discover curated learning paths designed to take you from beginner to expert in your chosen field.
          </p>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {learningPaths.map((path, index) => {
            const IconComponent = path.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-purple-200 transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${path.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {path.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {path.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{path.resources} Resources</span>
                  <span>{path.level}</span>
                </div>

                {/* CTA Link */}
                <a
                  href={`/learning-path/${path.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-purple-600 font-medium text-sm hover:text-purple-700 transition group"
                >
                  Explore Path
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href="/learning-paths"
            className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
          >
            View All Learning Paths
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
