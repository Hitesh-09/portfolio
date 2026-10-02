"use client"

import type React from "react"

import { useState } from "react"
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LetsWorkTogether() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [sent, setSent] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsClicked(true)

    setTimeout(() => {
      setShowSuccess(true)
    }, 500)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-32 pb-24">
      <div className="relative flex w-full max-w-lg flex-col items-center gap-12">
        <div
          className="absolute inset-0 z-10 flex w-full flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: showSuccess ? 1 : 0,
            transform: showSuccess ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            pointerEvents: showSuccess ? "auto" : "none",
            top: "-20px", // slight adjustment instead of -100px to avoid navbar collision
          }}
        >
          {sent ? (
            <div className="flex flex-col items-center gap-4 text-center mt-20">
              <span className="grid size-12 place-items-center rounded-full bg-white/10">
                <CheckCircle2 className="size-6 text-white" />
              </span>
              <h2 className="font-semibold text-2xl tracking-tight text-white">
                Message received
              </h2>
              <p className="text-white/60">
                We'll reply within one business day.
              </p>
            </div>
          ) : (
            <div className="w-full">
              <div className="flex flex-col gap-2 text-center">
                <h2 className="font-semibold text-3xl tracking-tight sm:text-4xl text-white">
                  Get in touch
                </h2>
                <p className="text-white/60">
                  Questions, feedback, or partnership inquiries — we read
                  everything.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 text-left">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="c16-name"
                    className="text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <Input
                    id="c16-name"
                    placeholder="Ada Lovelace"
                    required
                    className="h-11"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="c16-email"
                    className="text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <Input
                    id="c16-email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    className="h-11"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="c16-msg"
                    className="text-sm font-medium text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="c16-msg"
                    rows={5}
                    required
                    placeholder="How can we help?"
                    className="flex w-full rounded-lg border border-white/20 bg-black/50 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-1 w-full rounded-full"
                >
                  Send message
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              </form>
            </div>
          )}
        </div>

        {/* The rest of the original lets work together section, fading out on click */}



        <div
          className="group relative cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          style={{
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <h2
              className="relative text-center text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: isClicked ? 0 : 1,
                transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
              }}
            >
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  Let's work
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  <span className="text-white/60">together</span>
                </span>
              </span>
            </h2>

            <div className="relative mt-4 flex size-16 items-center justify-center sm:size-20">
              <div
                className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                style={{
                  borderColor: isClicked ? "white" : isHovered ? "white" : "rgba(255,255,255,0.2)",
                  backgroundColor: isClicked ? "transparent" : isHovered ? "white" : "transparent",
                  transform: isClicked ? "scale(3)" : isHovered ? "scale(1.1)" : "scale(1)",
                  opacity: isClicked ? 0 : 1,
                  transitionDuration: isClicked ? "700ms" : "500ms",
                }}
              />
              <ArrowUpRight
                className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                style={{
                  transform: isClicked
                    ? "translate(100px, -100px) scale(0.5)"
                    : isHovered
                      ? "translate(2px, -2px)"
                      : "translate(0, 0)",
                  opacity: isClicked ? 0 : 1,
                  color: isHovered && !isClicked ? "black" : "white",
                  transitionDuration: isClicked ? "600ms" : "500ms",
                }}
              />
            </div>
          </div>

          <div className="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16">
            <div
              className="h-px w-8 bg-white/20 transition-all duration-500 sm:w-12"
              style={{
                transform: isClicked ? "scaleX(0) translateX(-20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16">
            <div
              className="h-px w-8 bg-white/20 transition-all duration-500 sm:w-12"
              style={{
                transform: isClicked ? "scaleX(0) translateX(20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
              }}
            />
          </div>
        </div>

        <div
          className="mt-8 flex flex-col items-center gap-4 text-center transition-all duration-500 delay-100"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <p className="max-w-md text-sm leading-relaxed text-white/60">
            Have a project in mind? I'd love to hear about it. Let's create something exceptional together.
          </p>
          <span className="text-xs tracking-widest uppercase text-white/40">hello@example.com</span>
        </div>
      </div>
    </section>
  )
}
