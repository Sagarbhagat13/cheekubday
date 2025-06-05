import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(-20px) rotate(10deg)'
					}
				},
				'balloon-rise': {
					'0%': {
						transform: 'translateY(0px) rotate(0deg)',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(-120vh) rotate(15deg)',
						opacity: '0.8'
					}
				},
				'confetti-fall': {
					'0%': {
						transform: 'translateY(0px) rotate(0deg)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100vh) rotate(720deg)',
						opacity: '0'
					}
				},
				'grow-trunk': {
					'0%': {
						height: '0',
						transform: 'scaleY(0)',
						transformOrigin: 'bottom'
					},
					'100%': {
						height: '8rem',
						transform: 'scaleY(1)',
						transformOrigin: 'bottom'
					}
				},
				'heart-to-tree': {
					'0%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.2) rotate(5deg)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'scale(0) rotate(10deg)',
						opacity: '0'
					}
				},
				'heart-bloom': {
					'0%': {
						transform: 'scale(0) rotate(0deg)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.2) rotate(5deg)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '1'
					}
				},
				'background-transition': {
					'0%': {
						opacity: '0',
						transform: 'scale(1.1)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'seed-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(255, 215, 0, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 15px rgba(255, 215, 0, 0.6)'
					}
				},
				'sprout-emerge': {
					'0%': {
						height: '0',
						opacity: '0',
						transform: 'scaleY(0)',
						transformOrigin: 'bottom'
					},
					'100%': {
						height: '1rem',
						opacity: '1',
						transform: 'scaleY(1)',
						transformOrigin: 'bottom'
					}
				},
				'sapling-grow': {
					'0%': {
						height: '1rem',
						width: '2px'
					},
					'100%': {
						height: '3rem',
						width: '4px'
					}
				},
				'leaves-appear': {
					'0%': {
						transform: 'scale(0)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'trunk-thicken': {
					'0%': {
						width: '4px',
						height: '3rem'
					},
					'100%': {
						width: '8px',
						height: '5rem'
					}
				},
				'branches-spread': {
					'0%': {
						width: '0',
						opacity: '0'
					},
					'100%': {
						width: '6rem',
						opacity: '1'
					}
				},
				'heart-crown-left': {
					'0%': {
						transform: 'scale(0) rotate(-45deg)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1) rotate(-45deg)',
						opacity: '1'
					}
				},
				'heart-crown-right': {
					'0%': {
						transform: 'scale(0) rotate(45deg)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1) rotate(45deg)',
						opacity: '1'
					}
				},
				'heart-crown-point': {
					'0%': {
						transform: 'scale(0) translateY(-50%)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1) translateY(0)',
						opacity: '1'
					}
				},
				'magical-particles': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)',
						opacity: '0.7'
					},
					'25%': {
						transform: 'translateY(-20px) rotate(90deg)',
						opacity: '1'
					},
					'50%': {
						transform: 'translateY(-40px) rotate(180deg)',
						opacity: '0.8'
					},
					'75%': {
						transform: 'translateY(-20px) rotate(270deg)',
						opacity: '1'
					}
				},
				'grow-up': {
					'0%': {
						height: '0',
						transform: 'scaleY(0)',
						transformOrigin: 'bottom'
					},
					'100%': {
						height: '100%',
						transform: 'scaleY(1)',
						transformOrigin: 'bottom'
					}
				},
				'grow-branches': {
					'0%': {
						width: '0',
						height: '0',
						opacity: '0'
					},
					'100%': {
						width: '2rem',
						height: '2rem',
						opacity: '1'
					}
				},
				'tree-grow': {
					'0%': {
						height: '0',
						width: '2px'
					},
					'100%': {
						height: '6rem',
						width: '1rem'
					}
				},
				'branch-expand': {
					'0%': {
						width: '0',
						height: '0',
						opacity: '0'
					},
					'100%': {
						width: '4rem',
						height: '4rem',
						opacity: '0.7'
					}
				},
				'branch-expand-delayed': {
					'0%': {
						width: '0',
						height: '0',
						opacity: '0'
					},
					'100%': {
						width: '3rem',
						height: '3rem',
						opacity: '0.5'
					}
				},
				'heart-form-left': {
					'0%': {
						transform: 'scale(0) rotate(-45deg)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1) rotate(-45deg)',
						opacity: '1'
					}
				},
				'heart-form-right': {
					'0%': {
						transform: 'scale(0) rotate(45deg)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1) rotate(45deg)',
						opacity: '1'
					}
				},
				'heart-point': {
					'0%': {
						transform: 'scale(0) translateY(-100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1) translateY(0)',
						opacity: '1'
					}
				},
				'heart-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)',
						opacity: '0.8'
					},
					'50%': {
						transform: 'translateY(-30px) rotate(10deg)',
						opacity: '1'
					}
				},
				'sparkle': {
					'0%, 100%': {
						opacity: '0',
						transform: 'scale(0)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'float-slow': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px) rotate(0deg)'
					},
					'33%': {
						transform: 'translateY(-30px) translateX(20px) rotate(5deg)'
					},
					'66%': {
						transform: 'translateY(10px) translateX(-15px) rotate(-3deg)'
					}
				},
				'drift': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(-20px) translateX(30px) rotate(15deg)'
					}
				},
				'morph': {
					'0%, 100%': {
						borderRadius: '50% 50% 50% 50%',
						transform: 'rotate(0deg) scale(1)'
					},
					'25%': {
						borderRadius: '60% 40% 60% 40%',
						transform: 'rotate(90deg) scale(1.1)'
					},
					'50%': {
						borderRadius: '40% 60% 40% 60%',
						transform: 'rotate(180deg) scale(0.9)'
					},
					'75%': {
						borderRadius: '60% 40% 60% 40%',
						transform: 'rotate(270deg) scale(1.1)'
					}
				},
				'particle-float': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)',
						opacity: '0.6'
					},
					'50%': {
						transform: 'translateY(-50px) translateX(20px)',
						opacity: '1'
					}
				},
				'butterfly-appear': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.3) rotateY(90deg)',
						filter: 'blur(10px)'
					},
					'50%': {
						opacity: '0.7',
						transform: 'scale(0.8) rotateY(45deg)',
						filter: 'blur(5px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) rotateY(0deg)',
						filter: 'blur(0px)'
					}
				},
				'butterfly-flutter': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px) rotate(0deg) scale(0)'
					},
					'10%': {
						opacity: '1',
						transform: 'translateY(0px) rotate(10deg) scale(1)'
					},
					'20%': {
						transform: 'translateY(-10px) rotate(-5deg) scale(1.1)'
					},
					'30%': {
						transform: 'translateY(5px) rotate(15deg) scale(0.9)'
					},
					'40%': {
						transform: 'translateY(-15px) rotate(-10deg) scale(1.2)'
					},
					'50%': {
						transform: 'translateY(8px) rotate(20deg) scale(0.8)'
					},
					'60%': {
						transform: 'translateY(-20px) rotate(-15deg) scale(1.1)'
					},
					'70%': {
						transform: 'translateY(12px) rotate(25deg) scale(0.9)'
					},
					'80%': {
						transform: 'translateY(-25px) rotate(-20deg) scale(1.3)'
					},
					'90%': {
						transform: 'translateY(15px) rotate(30deg) scale(0.7)'
					},
					'100%': {
						opacity: '0.8',
						transform: 'translateY(-30px) rotate(-25deg) scale(0.5)'
					}
				},
				'gentle-pulse': {
					'0%, 100%': {
						transform: 'scale(1)',
						boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
					},
					'50%': {
						transform: 'scale(1.02)',
						boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)'
					}
				},
				'clock-tick': {
					'0%, 100%': {
						transform: 'rotate(0deg)',
						filter: 'drop-shadow(0 0 5px rgba(255, 191, 0, 0.5))'
					},
					'25%': {
						transform: 'rotate(3deg)',
						filter: 'drop-shadow(0 0 8px rgba(255, 191, 0, 0.7))'
					},
					'50%': {
						transform: 'rotate(0deg)',
						filter: 'drop-shadow(0 0 10px rgba(255, 191, 0, 0.9))'
					},
					'75%': {
						transform: 'rotate(-3deg)',
						filter: 'drop-shadow(0 0 8px rgba(255, 191, 0, 0.7))'
					}
				},
				'number-glow': {
					'0%, 100%': {
						textShadow: '0 0 10px rgba(255, 191, 0, 0.3)'
					},
					'50%': {
						textShadow: '0 0 20px rgba(255, 191, 0, 0.6), 0 0 30px rgba(255, 191, 0, 0.4)'
					}
				},
				'line-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(255, 191, 0, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 15px rgba(255, 191, 0, 0.6)'
					}
				},
				'gift-unwrap': {
					'0%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.1) rotate(5deg)',
						opacity: '0.7'
					},
					'100%': {
						transform: 'scale(0) rotate(20deg)',
						opacity: '0'
					}
				},
				'photo-reveal': {
					'0%': {
						transform: 'scale(0) rotate(45deg)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.1) rotate(10deg)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'scale(1) rotate(3deg)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'balloon-rise': 'balloon-rise 8s ease-out forwards',
				'confetti-fall': 'confetti-fall 4s ease-in forwards',
				'grow-trunk': 'grow-trunk 1s ease-out',
				'heart-to-tree': 'heart-to-tree 0.5s ease-in-out',
				'heart-bloom': 'heart-bloom 0.8s ease-out forwards',
				'background-transition': 'background-transition 1s ease-out',
				'seed-glow': 'seed-glow 2s ease-in-out infinite',
				'sprout-emerge': 'sprout-emerge 1.2s ease-out forwards',
				'sapling-grow': 'sapling-grow 1.5s ease-out forwards',
				'leaves-appear': 'leaves-appear 0.8s ease-out forwards',
				'trunk-thicken': 'trunk-thicken 1.8s ease-out forwards',
				'branches-spread': 'branches-spread 1.5s ease-out forwards',
				'heart-crown-left': 'heart-crown-left 1.2s ease-out forwards',
				'heart-crown-right': 'heart-crown-right 1.2s ease-out 0.3s forwards',
				'heart-crown-point': 'heart-crown-point 1s ease-out 0.8s forwards',
				'magical-particles': 'magical-particles 3s ease-in-out infinite',
				'grow-up': 'grow-up 1s ease-out',
				'grow-branches': 'grow-branches 1.5s ease-out 0.5s forwards',
				'tree-grow': 'tree-grow 2s ease-out',
				'branch-expand': 'branch-expand 2s ease-out',
				'branch-expand-delayed': 'branch-expand-delayed 2s ease-out 0.5s forwards',
				'heart-form-left': 'heart-form-left 1s ease-out 0.5s forwards',
				'heart-form-right': 'heart-form-right 1s ease-out 0.7s forwards',
				'heart-point': 'heart-point 0.8s ease-out 1.2s forwards',
				'heart-float': 'heart-float 3s ease-in-out infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',
				'drift': 'drift 12s ease-in-out infinite',
				'morph': 'morph 15s ease-in-out infinite',
				'particle-float': 'particle-float 20s linear infinite',
				'butterfly-appear': 'butterfly-appear 1.5s ease-out forwards',
				'butterfly-flutter': 'butterfly-flutter 3s ease-in-out infinite',
				'gentle-pulse': 'gentle-pulse 4s ease-in-out infinite',
				'clock-tick': 'clock-tick 2s ease-in-out infinite',
				'number-glow': 'number-glow 3s ease-in-out infinite',
				'line-glow': 'line-glow 2s ease-in-out infinite',
				'gift-unwrap': 'gift-unwrap 1s ease-out forwards',
				'photo-reveal': 'photo-reveal 1s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
