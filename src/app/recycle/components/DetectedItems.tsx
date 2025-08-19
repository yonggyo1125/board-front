import Image from 'next/image'
import styled from 'styled-components'

const StyledItems = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    width: 100px;
    height: 100px;
    border: 2px solid #000;
    position: relative;

    .category {
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;
      height: 25px;
      line-height: 25px;
    }
  }

  li + li {
    margin-left: 10px;
  }
`

export default function DetectedItems({ items }) {
  return (
    items &&
    items.length > 0 && (
      <StyledItems>
        {items.map(({ category2, dataUrl }, i) => (
          <li
            key={category2 + '-' + i}
            style={{
              background: `url(${dataUrl}) no-repeat center center`,
              backgroundSize: 'contain',
            }}
          >
            <div className="category">{category2}</div>
          </li>
        ))}
      </StyledItems>
    )
  )
}
