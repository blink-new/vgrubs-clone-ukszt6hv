import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Slider } from './ui/slider'
import { Badge } from './ui/badge'
import { Calculator, TrendingUp, DollarSign, Percent } from 'lucide-react'

export function PricingCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState([15000])
  const [currentCommission, setCurrentCommission] = useState([25])
  const [selectedPlan, setSelectedPlan] = useState('supercharged')
  const [customRevenue, setCustomRevenue] = useState('15000')

  // Update slider when input changes
  useEffect(() => {
    const value = parseInt(customRevenue) || 0
    if (value >= 1000 && value <= 100000) {
      setMonthlyRevenue([value])
    }
  }, [customRevenue])

  // Update input when slider changes
  useEffect(() => {
    setCustomRevenue(monthlyRevenue[0].toString())
  }, [monthlyRevenue])

  const plans = {
    universal: {
      name: 'Universal',
      monthlyFee: 129,
      commission: 0,
      features: ['Universal tablet', 'Basic analytics', 'Email support']
    },
    supercharged: {
      name: 'Supercharged',
      monthlyFee: 129,
      commission: 3,
      features: ['Revenue recovery', 'Advanced analytics', 'Priority support']
    },
    boosted: {
      name: 'Boosted',
      monthlyFee: 129,
      commission: 5,
      features: ['Order boosting', 'Concierge service', 'Virtual restaurants']
    }
  }

  const currentPlan = plans[selectedPlan as keyof typeof plans]
  const revenue = monthlyRevenue[0]
  
  // Calculate costs
  const currentPlatformFees = revenue * (currentCommission[0] / 100)
  const vgrubsCommission = revenue * (currentPlan.commission / 100)
  const totalVgrubsCost = currentPlan.monthlyFee + vgrubsCommission
  
  // Estimate savings (assuming 10-15% revenue increase with vGrubs)
  const revenueIncrease = selectedPlan === 'boosted' ? 0.15 : selectedPlan === 'supercharged' ? 0.12 : 0.08
  const newRevenue = revenue * (1 + revenueIncrease)
  const additionalRevenue = newRevenue - revenue
  
  // Net benefit calculation
  const netBenefit = additionalRevenue - totalVgrubsCost

  return (
    <div id="calculator" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Calculator className="text-primary" size={24} />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pricing Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much you could save and earn with vGrubs. Calculate your potential ROI based on your current revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator Inputs */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 text-primary" size={20} />
                Your Restaurant Details
              </CardTitle>
              <CardDescription>
                Enter your current monthly delivery revenue and platform commission rates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Monthly Revenue */}
              <div className="space-y-4">
                <Label className="text-base font-medium">Monthly Delivery Revenue</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500 w-16">$1,000</span>
                    <Slider
                      value={monthlyRevenue}
                      onValueChange={setMonthlyRevenue}
                      max={100000}
                      min={1000}
                      step={1000}
                      className="flex-1"
                    />
                    <span className="text-sm text-gray-500 w-20">$100,000</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">$</span>
                    <Input
                      type="number"
                      value={customRevenue}
                      onChange={(e) => setCustomRevenue(e.target.value)}
                      className="w-32"
                      min="1000"
                      max="100000"
                    />
                    <span className="text-sm text-gray-500">per month</span>
                  </div>
                </div>
              </div>

              {/* Current Commission */}
              <div className="space-y-4">
                <Label className="text-base font-medium">Current Platform Commission Rate</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500 w-8">15%</span>
                    <Slider
                      value={currentCommission}
                      onValueChange={setCurrentCommission}
                      max={35}
                      min={15}
                      step={1}
                      className="flex-1"
                    />
                    <span className="text-sm text-gray-500 w-8">35%</span>
                  </div>
                  <div className="text-center">
                    <Badge variant="outline" className="text-lg px-4 py-2">
                      <Percent className="mr-1" size={16} />
                      {currentCommission[0]}%
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Plan Selection */}
              <div className="space-y-4">
                <Label className="text-base font-medium">Select vGrubs Plan</Label>
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(plans).map(([key, plan]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedPlan(key)}
                      className={`p-4 rounded-lg border-2 text-left transition-colors ${
                        selectedPlan === key
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{plan.name}</h4>
                          <p className="text-sm text-gray-600">
                            ${plan.monthlyFee}/month {plan.commission > 0 && `+ ${plan.commission}% commission`}
                          </p>
                        </div>
                        {selectedPlan === key && (
                          <Badge className="bg-primary">Selected</Badge>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 text-primary" size={20} />
                Your Potential Savings & Growth
              </CardTitle>
              <CardDescription>
                Based on your inputs, here's what you could expect with vGrubs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Current Costs */}
              <div className="bg-white rounded-lg p-4 border">
                <h4 className="font-semibold text-gray-900 mb-3">Current Situation</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Revenue:</span>
                    <span className="font-medium">${revenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Platform Fees ({currentCommission[0]}%):</span>
                    <span className="font-medium text-red-600">-${currentPlatformFees.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-semibold">Net Revenue:</span>
                    <span className="font-semibold">${(revenue - currentPlatformFees).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* With vGrubs */}
              <div className="bg-white rounded-lg p-4 border border-primary/20">
                <h4 className="font-semibold text-gray-900 mb-3">With vGrubs {currentPlan.name}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projected Revenue:</span>
                    <span className="font-medium text-green-600">${newRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Fee:</span>
                    <span className="font-medium">-${currentPlan.monthlyFee}</span>
                  </div>
                  {currentPlan.commission > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Commission ({currentPlan.commission}%):</span>
                      <span className="font-medium">-${vgrubsCommission.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-semibold">Net Revenue:</span>
                    <span className="font-semibold text-green-600">${(newRevenue - totalVgrubsCost).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Net Benefit */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Monthly Net Benefit</h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ${netBenefit > 0 ? '+' : ''}${netBenefit.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-600">
                    {netBenefit > 0 ? 'Additional profit' : 'Investment cost'} per month
                  </p>
                  <div className="mt-3 text-xs text-gray-500">
                    *Based on {(revenueIncrease * 100).toFixed(0)}% revenue increase from optimization
                  </div>
                </div>
              </div>

              {/* Annual Projection */}
              <div className="bg-primary/10 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Annual Projection</h4>
                <div className="text-2xl font-bold text-primary">
                  ${(netBenefit * 12).toLocaleString()}
                </div>
                <p className="text-sm text-gray-600">Additional annual profit potential</p>
              </div>

              <Button className="w-full" size="lg">
                Start Free Trial - {currentPlan.name} Plan
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            *Results are estimates based on industry averages and may vary. Revenue increases depend on various factors including 
            restaurant type, location, and market conditions. Actual results may differ from projections.
          </p>
        </div>
      </div>
    </div>
  )
}