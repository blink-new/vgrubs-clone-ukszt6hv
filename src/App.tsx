import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { PricingCalculator } from './components/PricingCalculator'
import { 
  Smartphone, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Menu,
  X,
  Star,
  DollarSign,
  BarChart3,
  Zap
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary">vGrubs</h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
                <a href="#calculator" className="text-gray-600 hover:text-primary transition-colors">Calculator</a>
                <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
                <Button variant="outline" className="mr-2">Login</Button>
                <Button>Get Started</Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-primary">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-primary">Pricing</a>
              <a href="#calculator" className="block px-3 py-2 text-gray-600 hover:text-primary">Calculator</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-primary">About</a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full">Login</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent/10 text-accent border-accent/20">
                  Universal Restaurant Management
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  One Tablet.<br />
                  <span className="text-primary">All Platforms.</span><br />
                  Maximum Revenue.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Streamline your restaurant operations with our universal tablet system. 
                  Manage orders from UberEats, DoorDash, Grubhub, and more - all in one place.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  Start Free Trial
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Schedule Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  30-day free trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Cancel anytime
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gray-900 rounded-lg p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Order Dashboard</h3>
                    <Badge className="bg-green-500">Live</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                      <span>UberEats - Order #1234</span>
                      <span className="text-green-400">$24.99</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                      <span>DoorDash - Order #5678</span>
                      <span className="text-green-400">$18.50</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800 rounded">
                      <span>Grubhub - Order #9012</span>
                      <span className="text-green-400">$31.25</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform helps restaurants maximize revenue and streamline operations 
              across all delivery channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="text-primary" size={24} />
                </div>
                <CardTitle>Universal Tablet</CardTitle>
                <CardDescription>
                  One device to manage all your delivery platforms. No more juggling multiple tablets.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-accent" size={24} />
                </div>
                <CardTitle>Revenue Optimization</CardTitle>
                <CardDescription>
                  Boost your earnings with our revenue recovery and order boosting services.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="text-green-600" size={24} />
                </div>
                <CardTitle>Real-time Analytics</CardTitle>
                <CardDescription>
                  Track performance across all platforms with detailed insights and reporting.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-purple-600" size={24} />
                </div>
                <CardTitle>Concierge Service</CardTitle>
                <CardDescription>
                  Dedicated support team to handle customer issues and platform management.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="text-orange-600" size={24} />
                </div>
                <CardTitle>Fast Payouts</CardTitle>
                <CardDescription>
                  Get paid in minutes, not days. Improve your cash flow with instant settlements.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-red-600" size={24} />
                </div>
                <CardTitle>Virtual Restaurants</CardTitle>
                <CardDescription>
                  Expand your reach with virtual restaurant concepts and delivery-only brands.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your restaurant's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Universal Plan */}
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Universal</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$129</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <CardDescription className="mt-2">
                  Perfect for getting started with unified order management
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span>Universal tablet system</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span>All platform integration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span>Basic analytics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span>Email support</span>
                </div>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            {/* Supercharged Plan */}
            <Card className="border-2 border-primary shadow-lg transform scale-105">
              <CardHeader className="text-center">
                <Badge className="mb-2">Most Popular</Badge>
                <CardTitle className="text-2xl">Supercharged</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$129</span>
                  <span className="text-gray-600">/month</span>
                  <div className="text-sm text-gray-500">+ 3% commission</div>
                </div>
                <CardDescription className="mt-2">
                  Everything in Universal plus revenue optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span>Everything in Universal</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span>Revenue recovery service</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span>Priority support</span>
                </div>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>

            {/* Boosted Plan */}
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Boosted</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$129</span>
                  <span className="text-gray-600">/month</span>
                  <div className="text-sm text-gray-500">+ 5% commission</div>
                </div>
                <CardDescription className="mt-2">
                  Maximum growth with full concierge service
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span>Everything in Supercharged</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span>Order boosting service</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span>Full concierge support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={16} />
                  <span>Virtual restaurant setup</span>
                </div>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <PricingCalculator />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of restaurants already using vGrubs to maximize their delivery revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">vGrubs</h3>
              <p className="text-gray-400">
                The universal restaurant management platform for the modern food service industry.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 vGrubs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App