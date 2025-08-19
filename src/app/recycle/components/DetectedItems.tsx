import Image from 'next/image'
export default function DetectedItems({ items }) {
  return (
    items &&
    items.length > 0 && (
      <ul>
        {items.map(({ category2, dataUrl }, i) => (
          <li key={category2 + '-' + i}>
            <Image width={100} height={100} src={dataUrl} alt={category2} />
            <div>{category2}</div>
          </li>
        ))}
      </ul>
    )
  )
}
