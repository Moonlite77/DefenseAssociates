"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, email: "contact@defenseassociates.us" }),
      })

      if (response.ok) {
        setSubmitStatus("success")
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    }
    setIsSubmitting(false)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="md:hidden mb-8">
        <h2 className="text-2xl font-bold mb-4 text-[#E0E0E0]">Contact Information</h2>
        <div className="flex flex-col space-y-2 text-[#E0E0E0]">
          <div className="flex items-center">
            <Mail size={16} className="mr-2 text-[#AE1E23]" />
            <span>contact@defenseassociates.us</span>
          </div>
          <div className="flex items-center">
            <Phone size={16} className="mr-2 text-[#AE1E23]" />
            <span>256-933-8773</span>
          </div>
        </div>
        <p className="mt-4 text-[#E0E0E0]">Army Business Development Services</p>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <Input id="name" {...register("name", { required: "Name is required" })} className="w-full text-white" />
          {errors.name && <p className="text-red-500 mt-1">{errors.name.message as string}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
            })}
            className="w-full text-white"
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email.message as string}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <Textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className="w-full text-white"
            rows={5}
          />
          {errors.message && <p className="text-red-500 mt-1">{errors.message.message as string}</p>}
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        {submitStatus === "success" && <p className="text-green-500 mt-4">Message sent successfully!</p>}
        {submitStatus === "error" && <p className="text-red-500 mt-4">An error occurred. Please try again.</p>}
      </form>
    </div>
  )
}

