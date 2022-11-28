const NEXT_PUBLIC_SITE_TITLE = 'dev.NUOVOTAKA'
const NEXT_PUBLIC_SITE_DESCRIPTION = '時々更新ブログ'

const DocumentHead = ({ title = '', description = '' }) => {

  return (
    <>
      <meta charSet='UTF-8' />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title ? `${title} - ${NEXT_PUBLIC_SITE_TITLE}` : NEXT_PUBLIC_SITE_TITLE}</title>
      <meta
        name="description"
        content={description ? description : NEXT_PUBLIC_SITE_DESCRIPTION}
      />
    </>
  )
}

export default DocumentHead