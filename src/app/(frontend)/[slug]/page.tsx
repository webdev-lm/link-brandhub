import config from '@payload-config'
import { getPayload } from 'payload'

const SectionFull = (props:any) => {
 
    return(<div className='section-full' style={{width: '100%', padding: '10px'}}>
        <img src={props.imageFullWidth?.url} alt="Full Width" />
    </div>)
}

const SectionHalf = (props:any) => {
    return(<div className='section-half' style={{display: 'flex'}}>
        <img src={props.imageOne?.url} alt="Image One" style={{width: '50%', padding: '10px'}} />
        <img src={props.imageTwo?.url} alt="Image Two" style={{width: '50%', padding: '10px'}} />
    </div>)
}

const ComponentResolver = (props:any) => {
    switch (props.blockType) {
        case 'sectionFull':
            return <SectionFull {...props} />
        case 'sectionHalf':
            return <SectionHalf {...props} />
        default:
            break;
    }
}

type Args = {
  params: Promise<{
    slug:  string
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export default async function Page({ params }: Args) {
    const {slug} = await params
  const payload = await getPayload({
    config,
  })
    const data = await payload.find({
    collection: 'pages',
    where:{slug: {equals: slug}},
    limit: 1
  })
    console.log(data.docs[0]);
    return (
        <div className='page'>
            <h1>Dynamic Page for {slug}</h1>
            {data?.docs[0]?.componentResolver?.map((block:any, index:number) => (
                <ComponentResolver key={index} {...block} />
            ))}
        </div>
    )
}