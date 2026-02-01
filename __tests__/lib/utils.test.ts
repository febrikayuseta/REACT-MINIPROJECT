
import { formatPrice, isValidEmail, truncate } from '@/lib/utils'

describe('formatPrice', () => {
    it('formats number as IDR currency', () => {
        expect(formatPrice(1000)).toContain('1.000')
        expect(formatPrice(1000)).toMatch(/Rp|IDR/i)
    })

    it('handles zero', () => {
        expect(formatPrice(0)).toContain('0')
    })

    it('handles large numbers with thousand separators', () => {
        const formatted = formatPrice(1000000)
        expect(formatted).toContain('1.000.000')
    })

    it('handles decimal numbers', () => {
        expect(formatPrice(1000.50)).toContain('1.000,5')
    })
})

describe('isValidEmail', () => {
    it('returns true for valid email', () => {
        expect(isValidEmail('test@example.com')).toBe(true)
    })

    it('returns false for invalid email', () => {
        expect(isValidEmail('invalid-email')).toBe(false)
    })
})

describe('truncate', () => {
    it('truncates text to maximum length', () => {
        expect(truncate('Hello, world!', 5)).toBe('He...')
    })

    it('does not truncate if text is shorter than maximum length', () => {
        expect(truncate('Hello', 10)).toBe('Hello')
    })
})
