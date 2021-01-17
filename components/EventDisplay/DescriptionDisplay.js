
import hydrate from 'next-mdx-remote/hydrate'
//import Layout from '../../components/Layout'
import DescriptionLayout from './DescriptionLayout'

export default function Description({ source, frontMatter }) {
    const content = hydrate(source)
    return (
      <DescriptionLayout>
       {/*  <div>
          {frontMatter.description && (
            <p className="description">{frontMatter.description}</p>
          )}
        </div> */}
        <main>{content}</main>
  
        <style jsx>{`
          .post-header h1 {
            margin-bottom: 0;
          }
  
          .post-header {
            margin-bottom: 2rem;
          }
          .description {
            opacity: 0.6;
          }
        `}</style>
      </DescriptionLayout>
    )
  }