import { BreadcrumbJsonLd } from 'next-seo'

type BreadcrumbSchemaProps = {
  trial: { name: string; path: string }[]
}
const BreadcrumbSchema = ({ trial }: BreadcrumbSchemaProps) => {
  return (
    <BreadcrumbJsonLd
      useAppDir
      scriptId="breadcrumb-schema-org"
      itemListElements={[
        ...trial.map((item, index) => {
          return {
            position: index + 1,
            name: item.name,
            item: `url base do site${item.path}`,
          }
        }),
      ]}
    />
  )
}
export default BreadcrumbSchema
