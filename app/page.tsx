import { Background } from "@/components/background"
import { AnimatedHeader } from "@/components/animated-header"
import { CodeShowcase } from "@/components/code-showcase"
import { FeatureCard } from "@/components/feature-card"
import { AnimatedTerminal } from "@/components/animated-terminal"
import { CommandMenu } from "@/components/command-menu"
import { Brain, Code2, Cpu, GitFork, Terminal, Zap } from 'lucide-react'
import { CodePreview } from "@/components/code-preview"
import { GradientLines } from "@/components/gradient-lines"

const features = [
  {
    iconName: 'brain',
    title: "AI-Powered Analysis",
    description: "Leverages OpenAI's advanced language models to understand your code context and generate meaningful comments."
  },
  {
    iconName: 'zap',
    title: "Lightning Fast",
    description: "Process entire files or specific code blocks in seconds with our optimized processing pipeline."
  },
  {
    iconName: 'code',
    title: "Multiple Languages",
    description: "Supports a wide range of programming languages including JavaScript, Python, Java, and more."
  },
  {
    iconName: 'terminal',
    title: "CLI Integration",
    description: "Seamlessly integrate with your development workflow through our intuitive command-line interface."
  },
  {
    iconName: 'cpu',
    title: "Smart Context",
    description: "Understands code structure and relationships to generate contextually accurate documentation."
  },
  {
    iconName: 'git-fork',
    title: "Version Control Friendly",
    description: "Works seamlessly with Git and other version control systems for easy integration."
  }
]

export default function Page() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <CommandMenu />
      <Background />
      <AnimatedHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-16 flex flex-col items-center justify-center overflow-hidden">
        <GradientLines />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-white/[0.05] to-white/[0.02]" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl opacity-20" />
        </div>
        
        <div className="container relative mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-6 inline-block animate-fade-in">
              <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/70">
                v1.0 Now Available
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in [--animate-delay:200ms]">
              AI-Powered Code{' '}
              <span className="relative">
                <span className="absolute -inset-1 rounded-lg bg-white/5 blur-xl" />
                <span className="relative bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                  Documentation
                </span>
              </span>
            </h1>
            <p className="text-xl text-white/70 animate-fade-in [--animate-delay:300ms]">
              Transform your codebase with intelligent, automated code commenting.
              Enhance documentation and improve code readability effortlessly.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in [--animate-delay:400ms]">
              <button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors">
                Get Started
              </button>
              <div className="w-full sm:w-auto">
                <AnimatedTerminal />
              </div>
            </div>
            <p className="mt-4 text-sm text-white/50 animate-fade-in [--animate-delay:500ms]">
              Press{' '}
              <kbd className="px-2 py-1 text-xs rounded-md bg-white/10 border border-white/20">
                ⌘
              </kbd>{' '}
              +{' '}
              <kbd className="px-2 py-1 text-xs rounded-md bg-white/10 border border-white/20">
                K
              </kbd>{' '}
              to open command menu
            </p>
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in [--animate-delay:600ms]">
            <CodePreview />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-white/70 text-lg">
              Everything you need to generate meaningful code documentation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                iconName={feature.iconName}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Code Showcase Section */}
      <CodeShowcase />

      {/* Installation Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 text-lg mb-12">
              Install CodeTalk with npm and start generating intelligent code comments in seconds.
            </p>
            <div className="max-w-xl mx-auto">
              <AnimatedTerminal />
              <button className="mt-12 px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 relative bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-white/5">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold">CodeTalk</span>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">npm</a>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-white/40">
            © {new Date().getFullYear()} CodeTalk. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

