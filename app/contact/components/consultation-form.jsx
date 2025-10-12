"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { Textarea } from "../../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { Checkbox } from "../../../components/ui/checkbox"
import { useFormspark } from "@formspark/use-formspark";
import useToast from "../../hooks/use-toast"

const projectTypes = ["Residential Home", "Commercial Building", "Renovation/Remodel", "Infrastructure", "Other"]

const budgetRanges = [
  "Under $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000 - $500,000",
  "$500,000 - $1,000,000",
  "Over $1,000,000",
]

const timeframes = ["ASAP", "Within 3 months", "3-6 months", "6-12 months", "Over 1 year", "Just exploring"]

export function ConsultationForm() {
  const [submit, submitting] = useFormspark({ formId: 'X6rgxbO8w' })
  const { success } = useToast()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeframe: '',
    location: '',
    description: '',
    hasPlans: false,
    needsPermits: false,
    isFirstTime: false,
  })

  /* helper to keep the code DRY */
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await submit(formData)          // send the same object
    success("Consultation Request Submitted! We'll contact you within 24 hours.")
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeframe: '',
      location: '',
      description: '',
      hasPlans: false,
      needsPermits: false,
      isFirstTime: false,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="border-2 shadow-xl">
        <CardHeader className="bg-black rounded-t-lg">
          <CardTitle className="text-2xl text-center text-white">
            Book Your Free Consultation
          </CardTitle>
          <p className="text-center text-orange-100">
            Tell us about your project and we'll create a custom plan for you
          </p>
        </CardHeader>

        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* --- Contact Information --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-lg border-b-2 border-orange-500 pb-2 text-orange-500">
                Contact Information
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="rounded-xl"
                />
              </div>
            </motion.div>

            {/* --- Project Details --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-lg border-b-2 border-orange-500 pb-2 text-orange-500">
                Project Details
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(v) =>
                      setFormData((prev) => ({ ...prev, projectType: v }))
                    }
                  >
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range *</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(v) =>
                      setFormData((prev) => ({ ...prev, budget: v }))
                    }
                  >
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((r) => (
                        <SelectItem key={r} value={r}>
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="timeframe">Timeline *</Label>
                  <Select
                    value={formData.timeframe}
                    onValueChange={(v) =>
                      setFormData((prev) => ({ ...prev, timeframe: v }))
                    }
                  >
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="When do you want to start?" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeframes.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Project Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State"
                    required
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your vision, specific requirements, challenges, or any other details..."
                  required
                  className="min-h-[120px] rounded-xl"
                />
              </div>
            </motion.div>

            {/* --- Additional Information --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-lg border-b-2 border-orange-500 pb-2 text-orange-500">
                Additional Information
              </h4>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasPlans"
                    checked={formData.hasPlans}
                    onCheckedChange={(c) =>
                      setFormData((prev) => ({ ...prev, hasPlans: Boolean(c) }))
                    }
                  />
                  <Label htmlFor="hasPlans" className="text-sm">
                    I already have architectural plans or blueprints
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="needsPermits"
                    checked={formData.needsPermits}
                    onCheckedChange={(c) =>
                      setFormData((prev) => ({ ...prev, needsPermits: Boolean(c) }))
                    }
                  />
                  <Label htmlFor="needsPermits" className="text-sm">
                    I need help with permits and approvals
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isFirstTime"
                    checked={formData.isFirstTime}
                    onCheckedChange={(c) =>
                      setFormData((prev) => ({ ...prev, isFirstTime: Boolean(c) }))
                    }
                  />
                  <Label htmlFor="isFirstTime" className="text-sm">
                    This is my first construction project
                  </Label>
                </div>
              </div>
            </motion.div>

            {/* --- Submit --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                type="submit"
                disabled={submitting}
                className="w-full h-12 text-lg font-semibold rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white"
              >
                {submitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: 'linear',
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  'Schedule Free Consultation'
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-3">
                By submitting this form, you agree to be contacted by our team
                regarding your project. We respect your privacy and will never
                share your information.
              </p>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
