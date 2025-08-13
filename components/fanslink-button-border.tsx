"use client"

import type { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

interface FanslinkButtonBorderProps extends PropsWithChildren {
  className?: string
  radius?: string
  thickness?: number
  speedMs?: number
}

/**
 * FanslinkButtonBorder
 * Complete border system used for the "Get Fanslink Now" button
 * 
 * This component creates an animated rainbow shimmer border that wraps around buttons.
 * It's extracted from the RainbowBorder component used throughout the Fanslink site.
 * 
 * Features:
 * - Animated gradient border with rainbow colors (white → blue → purple → orange)
 * - Customizable border radius, thickness, and animation speed
 * - Smooth color transitions that loop infinitely
 * - Enhanced saturation for vibrant appearance
 * 
 * Usage:
 *   <FanslinkButtonBorder>
 *     <button>Your Button Content</button>
 *   </FanslinkButtonBorder>
 * 
 * Customization:
 *   <FanslinkButtonBorder 
 *     thickness={3} 
 *     speedMs={3000} 
 *     radius="12px"
 *   >
 *     <button>Custom Button</button>
 *   </FanslinkButtonBorder>
 */
export default function FanslinkButtonBorder({
  children,
  className,
  radius = "9999px", // Full rounded (pill shape)
  thickness = 2,     // Border thickness in pixels
  speedMs = 2500,    // Animation speed in milliseconds
}: FanslinkButtonBorderProps) {
  return (
    <div 
      className={cn("relative inline-flex", className)} 
      style={{ 
        borderRadius: radius, 
        padding: thickness 
      }}
    >
      {/* Animated gradient border background */}
      <div 
        className="absolute inset-0 z-0 rounded-[inherit] opacity-90 fanslink-gradient" 
        aria-hidden 
      />
      
      {/* Button content container */}
      <div className="relative z-10 rounded-[inherit]">
        {children}
      </div>

      {/* CSS animation styles */}
      <style jsx>{`
        .fanslink-gradient {
          /* Rainbow gradient: white → light blue → purple → orange → white */
          background: linear-gradient(90deg, 
            #ffffff 0%,    /* White */
            #9aa7ff 25%,   /* Light blue */
            #7b61ff 50%,   /* Purple */
            #ffd089 75%,   /* Orange */
            #ffffff 100%   /* White */
          );
          
          /* Make gradient larger than container for smooth animation */
          background-size: 200% 200%;
          
          /* Infinite linear animation */
          animation: fanslinkBorderShift ${speedMs}ms linear infinite;
          
          /* Enhanced color saturation for vibrant effect */
          filter: saturate(1.1);
        }
        
        @keyframes fanslinkBorderShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </div>
  )
}

/**
 * COMPLETE BUTTON STYLING REFERENCE
 * 
 * For reference, here's how the complete "Get Fanslink Now" button is constructed:
 * 
 * HTML Structure:
 * <FanslinkButtonBorder>
 *   <button className="pill-button-styles">
 *     Get Fanslink Now
 *   </button>
 * </FanslinkButtonBorder>
 * 
 * Button CSS Classes (from PillButton component):
 * - Layout: "relative inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold text-white transition-all"
 * - Background: "bg-[linear-gradient(to_bottom,#1b2144_0%,#121737_55%,#0e1330_100%)]"
 * - Border: "border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
 * - Hover: "hover:brightness-[1.05] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_10px_24px_-8px_rgba(123,97,255,0.25)]"
 * - Active: "active:translate-y-[1px]"
 * - Focus: "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
 * - Size (lg): "px-6 py-3 text-base"
 * 
 * Color Palette Used:
 * - White: #ffffff
 * - Light Blue: #9aa7ff
 * - Purple: #7b61ff
 * - Orange: #ffd089
 */
