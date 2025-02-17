/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		spacing: {
  			'128': '32rem',
  			'144': '36rem'
  		},
  		borderRadius: {
  			'4xl': '2rem',
  			custom: '0.65375rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		screens: {
  			sm: '480px',
  			md: '768px',
  			lg: '976px',
  			xl: '1440px',
  			lxl: '1652px'
  		},
  		maxWidth: {
  			customMaxWidth: '1920px'
  		},
  		scrollbar: {
  			hide: 'scrollbar-width: none; -ms-overflow-style: none;'
  		},
  		colors: {
  			transparent: 'transparent',
  			white: '#ffffff',
  			black: '#000000',
  			gray_bold: '#1E1E1E',
			gray_text: '#A8A8A8',
  			gray_light: '#6A6A6A',
  			gray_bold_light: '#6B7280',
  			gray_medium: '#D9D9D9',
  			gray_medium_light: '#999999',
  			primary_bold: '#B91434',
  			primary_medium: '#D11648',
  			primary_light: '#C3375F',
  			background_color: '#F7F7F7',
  			black_light: '#1E1E1E',
  			gray_dark: '#222222',
  			gray_normal: '#414045',
  			grad_light: '#444444',
  			green_light: '#2F7131',
  			red_bold: '#EB001B',
			red_btn: '#F34F4F',
  			red_light: '#FF3B30',
  			green_bold: '#34D399',
  			blue_bold: '#1E3A8A',
  			yellow_bold: '#F59E0B',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			  purple: {
				20: '#F1D0FE',
				30: '#f9e4ff',
				40: '#f7dcff',
				50: '#fcf4ff',
				100: '#f8e8ff',
				200: '#f1d0fe',
				300: '#e9abfc',
				400: '#dc79f9',
				500: '#ca46ef',
				600: '#b026d3',
				700: '#951caf',
				800: '#7b198f',
				900: '#681a75',
				950: '#43044e',
				960: '#742889'
			  },
  
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			poppins: ['Poppins', 'sans-serif'],
			inter: ['Inter', 'sans-serif'], 
			
  		},
  		fontSize: {
  			'2xs': '0.625rem',
  			'3xs': '0.5rem'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};