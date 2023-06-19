type Props = {
  title: string;
  date: string;
  authors: string;
  confName: string;
  confType: string;
  url: string;
}

const Proceedings = ({
  title,
  authors,
  date,
  confName,
  confType,
  url,
}: Props) => {
  return (
    <div>
      <div>
        <p className="text-m font-notoSansJp">
          カンファレンス ({confType})
        </p>
      </div>
      <div className="text-xl">
        <p>"{title}"</p>
      </div>
      <div className="text-m pt-2">
        <p>
          {authors}
        </p>
      </div>
      <div className="text-m">
        <a href={url} target="_brank" rel="noopener noreferrer" className="text-left hover:underline hover:cursor-pointer">
          {confName}
        </a>
      </div>
      <div className="text-m">
        <p>
          {date}
        </p>
      </div>
    </div>
  )
}

export default Proceedings;