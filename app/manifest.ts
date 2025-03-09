import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Márkus Szalon',
    short_name: 'Szalon',
    description: 'Márkus szalon',
    display: 'minimal-ui',
    background_color: 'slate-500',
    theme_color: 'slate-500',
    start_url: "/",
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}