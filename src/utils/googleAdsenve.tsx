import Script from 'next/script'

type Props = {
  pub: string
}

const GoogleAdsense: React.FC<Props> = ({ pub }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pub}`}
      crossOrigin="anonymous"
    />
  )
}

export default GoogleAdsense
