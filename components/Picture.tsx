import { CONFIG } from '@/lib/constants'

interface PictureProps {
    src?: string
    alt?: string
    size?: number
    className?: string
}

export default function Picture({
    src = '/profile.jpg',
    alt = 'Mark Martinaj',
    size = 128,
    className = '',
}: PictureProps) {
    if (!CONFIG.pictureEnabled) return null

    return (
        <div className={className}>
            <img
                src={src}
                alt={alt}
                width={size}
                height={size}
                loading="lazy"
                decoding="async"
                style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover' }}
            />
        </div>
    )
}
