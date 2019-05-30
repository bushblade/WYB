import React from 'react'
import { useSpring, useTrail, animated, config } from 'react-spring'

import treeLeft from './treeLeft'
import treeRight from './treeRight'

export default function Logo() {
  const seedSpring = useSpring({
    opacity: 1,
    config: config.molasses,
    delay: 200,
    from: { opacity: 0 },
  })
  const BGspring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.molasses,
  })

  const treeLeftTrail = useTrail(treeLeft.length, {
    opacity: 1,
    strokeDashoffset: 0,
    from: { strokeDashoffset: 100, strokeDasharray: 100, opacity: 0 },
    config: config.slow,
    delay: 400,
  })

  const treeRightTrail = useTrail(treeRight.length, {
    opacity: 1,
    strokeDashoffset: 0,
    from: { strokeDashoffset: 100, strokeDasharray: 100, opacity: 0 },
    config: config.slow,
    delay: 400,
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="svg7651"
      viewBox="0 0 63.499998 101.83744"
      height="481.122"
      width="300"
      style={{
        filter: `drop-shadow(1px 3px 3px rgba(0,0,0,0.3))`,
      }}
    >
      <defs id="defs7645">
        <filter id="filter6647" colorInterpolationFilters="sRGB">
          <feFlood
            id="feFlood6649"
            result="flood"
            floodColor="#000"
            floodOpacity="0.306"
          />
          <feComposite
            id="feComposite6651"
            result="composite1"
            operator="in"
            in2="SourceGraphic"
            in="flood"
          />
          <feGaussianBlur
            id="feGaussianBlur6653"
            result="blur"
            stdDeviation="59.4"
            in="composite1"
          />
          <feOffset id="feOffset6655" result="offset" dy="-50" dx="50" />
          <feComposite
            id="feComposite6657"
            result="composite2"
            in2="offset"
            in="SourceGraphic"
          />
        </filter>
        <filter id="filter6359" colorInterpolationFilters="sRGB">
          <feFlood
            id="feFlood6361"
            result="flood"
            floodColor="#927C28"
            floodOpacity="1"
          />
          <feComposite
            id="feComposite6363"
            result="composite1"
            operator="in"
            in2="SourceGraphic"
            in="flood"
          />
          <feGaussianBlur
            id="feGaussianBlur6365"
            result="blur"
            stdDeviation="5"
            in="composite1"
          />
          <feOffset id="feOffset6367" result="offset" dy="6" dx="6" />
          <feComposite
            id="feComposite6369"
            result="composite2"
            in2="offset"
            in="SourceGraphic"
          />
        </filter>
        <filter id="filter7463" colorInterpolationFilters="sRGB">
          <feFlood
            id="feFlood7453"
            result="flood"
            floodColor="#927C28"
            floodOpacity="1"
          />
          <feComposite
            id="feComposite7455"
            result="composite1"
            operator="in"
            in2="SourceGraphic"
            in="flood"
          />
          <feGaussianBlur
            id="feGaussianBlur7457"
            result="blur"
            stdDeviation="5"
            in="composite1"
          />
          <feOffset id="feOffset7459" result="offset" dy="6" dx="6" />
          <feComposite
            id="feComposite7461"
            result="composite2"
            in2="offset"
            in="SourceGraphic"
          />
        </filter>
        <filter id="filter4952" colorInterpolationFilters="sRGB">
          <feFlood
            floodOpacity="0.059"
            floodColor="#000"
            result="flood"
            id="feFlood4942"
          />
          <feComposite
            in="flood"
            in2="SourceGraphic"
            operator="in"
            result="composite1"
            id="feComposite4944"
          />
          <feGaussianBlur
            in="composite1"
            stdDeviation="1"
            result="blur"
            id="feGaussianBlur4946"
          />
          <feOffset dx="1" dy="1" result="offset" id="feOffset4948" />
          <feComposite
            in="SourceGraphic"
            in2="offset"
            result="composite2"
            id="feComposite4950"
          />
        </filter>
        <filter id="filter5072" colorInterpolationFilters="sRGB">
          <feFlood
            floodOpacity="0.392"
            floodColor="#000"
            result="flood"
            id="feFlood5062"
          />
          <feComposite
            in="flood"
            in2="SourceGraphic"
            operator="in"
            result="composite1"
            id="feComposite5064"
          />
          <feGaussianBlur
            in="composite1"
            stdDeviation="1"
            result="blur"
            id="feGaussianBlur5066"
          />
          <feOffset dx="1" dy="1" result="offset" id="feOffset5068" />
          <feComposite
            in="SourceGraphic"
            in2="offset"
            result="composite2"
            id="feComposite5070"
          />
        </filter>
        <filter id="filter5084" colorInterpolationFilters="sRGB">
          <feFlood
            floodOpacity="0.392"
            floodColor="#000"
            result="flood"
            id="feFlood5074"
          />
          <feComposite
            in="flood"
            in2="SourceGraphic"
            operator="in"
            result="composite1"
            id="feComposite5076"
          />
          <feGaussianBlur
            in="composite1"
            stdDeviation="1"
            result="blur"
            id="feGaussianBlur5078"
          />
          <feOffset dx="1" dy="1" result="offset" id="feOffset5080" />
          <feComposite
            in="SourceGraphic"
            in2="offset"
            result="composite2"
            id="feComposite5082"
          />
        </filter>
        <filter id="filter5096" colorInterpolationFilters="sRGB">
          <feFlood
            floodOpacity="0.392"
            floodColor="#000"
            result="flood"
            id="feFlood5086"
          />
          <feComposite
            in="flood"
            in2="SourceGraphic"
            operator="in"
            result="composite1"
            id="feComposite5088"
          />
          <feGaussianBlur
            in="composite1"
            stdDeviation="1"
            result="blur"
            id="feGaussianBlur5090"
          />
          <feOffset dx="1" dy="1" result="offset" id="feOffset5092" />
          <feComposite
            in="SourceGraphic"
            in2="offset"
            result="composite2"
            id="feComposite5094"
          />
        </filter>
      </defs>
      <g
        transform="matrix(1.27027 0 0 1.27027 84.573 -120.909)"
        id="layer1"
        stroke="#000"
      >
        <animated.path
          style={BGspring}
          transform="matrix(0 .01238 -.0157 0 -3.184 125.464)"
          d="m -853.86914,876.73242 c -416.24546,0 -815.44136,165.35358 -1109.77146,459.68358 -294.33,294.33 -459.6836,693.5265 -459.6836,1109.7715 0,416.246 165.3536,815.4434 459.6836,1109.7734 294.3301,294.33 693.526,459.6836 1109.77146,459.6836 H 2437.7812 c 416.2457,0 815.4434,-165.3536 1109.7735,-459.6836 294.33,-294.33 459.6836,-693.5274 459.6836,-1109.7734 0,-416.245 -165.3536,-815.4415 -459.6836,-1109.7715 C 3253.2246,1042.086 2854.027,876.73242 2437.7812,876.73242 Z"
          id="background-green"
          xlinkHref="#path11514-9"
          fill="#668000"
          fillRule="evenodd"
          strokeWidth="45.552"
          strokeLinecap="round"
        />
        <animated.path
          style={BGspring}
          id="background-kahki"
          d="m -25.436761,102.44377 c -4.282408,-3.506034 -10.090632,-5.475705 -16.146872,-5.475705 -6.056257,0 -11.864448,1.969671 -16.146856,5.475705 -4.282407,3.50604 -6.68824,8.26124 -6.68824,13.21952 v 39.20988 c 0,4.95829 2.405833,9.71349 6.68824,13.21953 4.282408,3.50604 10.090599,5.47571 16.146856,5.47571 6.05624,0 11.864464,-1.96967 16.146872,-5.47571 4.282392,-3.50604 6.688224,-8.26124 6.688224,-13.21953 v -39.20988 c 0,-4.95828 -2.405832,-9.71348 -6.688224,-13.21952 z"
          fill="#decd87"
          fillRule="evenodd"
          strokeWidth="0.635"
          strokeLinecap="round"
        />
        <g
          id="tree-left"
          filter="url(#filter5072)"
          fill="none"
          strokeWidth="0.635"
          strokeLinecap="round"
        >
          {treeLeftTrail.map((styles, index) => (
            <animated.path
              {...treeLeft[index]}
              key={treeLeft[index].id}
              style={styles}
            />
          ))}
        </g>
        <animated.g
          style={seedSpring}
          id="seed"
          fill="none"
          strokeWidth="0.635"
          filter="url(#filter5096)"
        >
          <ellipse
            ry="8.008"
            rx="8.008"
            cy="150.322"
            cx="-41.574"
            id="ellipse6792"
          />
          <ellipse
            ry="8.008"
            rx="8.008"
            cy="142.314"
            cx="-41.574"
            id="ellipse6794"
          />
          <ellipse
            ry="8.008"
            rx="8.008"
            cy="158.329"
            cx="-41.574"
            id="ellipse6796"
          />
          <ellipse
            ry="8.008"
            rx="8.008"
            cy="146.318"
            cx="-48.511"
            id="ellipse6798"
          />
          <ellipse
            ry="8.008"
            rx="8.008"
            cy="146.318"
            cx="-34.638"
            id="ellipse6800"
          />
          <ellipse
            ry="8.008"
            rx="8.008"
            cy="154.325"
            cx="-48.511"
            id="ellipse6802"
          />
          <ellipse
            ry="8.008"
            rx="8.008"
            cy="154.325"
            cx="-34.638"
            id="ellipse6804"
          />
          <path
            id="path6806"
            d="m -27.702679,150.3225 c -4.422511,0 -8.007666,-3.58515 -8.007666,-8.00766 0,-1.46453 0.393173,-2.83724 1.079696,-4.01832"
          />
          <path
            d="m -34.639739,138.30982 c -2.211256,3.83001 -7.108666,5.14226 -10.93867,2.93101 -1.268317,-0.73227 -2.260544,-1.7591 -2.940127,-2.9442"
            id="path6808"
          />
          <path
            d="m -48.494876,138.30868 c 2.211256,3.83 0.898984,8.72741 -2.93102,10.93867 -1.268317,0.73226 -2.653685,1.07813 -4.019806,1.07412"
            id="path6810"
          />
          <path
            d="m -34.639739,162.33332 c -2.211256,-3.83 -7.108666,-5.14226 -10.93867,-2.931 -1.268317,0.73226 -2.260544,1.7591 -2.940127,2.9442"
            id="path6812"
          />
          <path
            d="m -55.438155,150.3055 c 4.422512,-1e-5 8.00765,3.58515 8.007667,8.00766 0,1.46453 -0.393157,2.83723 -1.079696,4.01832"
            id="path6814"
          />
          <path
            id="path6816"
            d="m -27.711768,150.30733 c -4.422512,0 -8.00765,3.58516 -8.00765,8.00767 -1.7e-5,1.46453 0.393156,2.83723 1.079679,4.01832"
          />
          <path
            d="m -27.681562,158.36204 c -0.71417,-1.18846 -1.128804,-2.57805 -1.138779,-4.06502 -0.0098,-1.4645 0.374123,-2.83981 1.052721,-4.02547"
            id="path6818"
          />
          <path
            id="path6820"
            d="m -55.52221,158.39571 c 0.714169,-1.18846 1.12882,-2.57805 1.138795,-4.06502 0.0098,-1.4645 -0.374124,-2.83981 -1.052722,-4.02548"
          />
          <path
            d="m -55.588562,150.50452 c 0.714169,-1.18846 1.12882,-2.57805 1.138795,-4.06503 0.0098,-1.46449 -0.374124,-2.8398 -1.052722,-4.02547"
            id="path6822"
          />
          <path
            id="path6824"
            d="m -27.703893,150.32277 c -0.714169,-1.18846 -1.12882,-2.57805 -1.138795,-4.06503 -0.0098,-1.46449 0.374123,-2.8398 1.052721,-4.02547"
          />
          <path
            d="m -27.590287,142.28079 c -1.38632,0.0243 -2.79707,-0.31144 -4.089817,-1.04629 -1.27319,-0.72375 -2.272275,-1.74391 -2.959799,-2.92442"
            id="path6826"
          />
          <path
            id="path6828"
            d="m -34.639197,138.31127 c -1.386336,0.0243 -2.79707,-0.31144 -4.089817,-1.04629 -1.273206,-0.72375 -2.272276,-1.74391 -2.959799,-2.92442"
          />
          <path
            d="m -48.738429,138.31127 c 1.386319,0.0243 2.797069,-0.31144 4.089817,-1.04629 1.273189,-0.72375 2.272275,-1.74391 2.959799,-2.92442"
            id="path6830"
          />
          <path
            id="path6832"
            d="m -55.507559,142.38467 c 1.386238,0.0282 2.797923,-0.30352 4.092754,-1.0347 1.275241,-0.72013 2.277214,-1.73746 2.968069,-2.91602"
          />
          <path
            d="m -55.569956,158.38261 c 1.386253,-0.0282 2.797939,0.30352 4.092753,1.0347 1.275257,0.72013 2.277214,1.73745 2.968085,2.91601"
            id="path6834"
          />
          <path
            id="path6836"
            d="m -48.672668,162.3334 c 1.386254,-0.0282 2.797939,0.30351 4.092754,1.0347 1.275257,0.72013 2.277214,1.73746 2.968085,2.91601"
          />
          <path
            d="m -34.639739,162.33332 c -1.386254,-0.0282 -2.797939,0.30352 -4.092754,1.0347 -1.275257,0.72013 -2.277214,1.73746 -2.968084,2.91602"
            id="path6838"
          />
          <path
            id="path6840"
            d="m -27.684548,158.29675 c -1.386254,-0.0282 -2.797939,0.30351 -4.09277,1.03469 -1.275241,0.72014 -2.277198,1.73746 -2.968069,2.91602"
          />
          <path
            d="m -34.639739,146.31749 c -1.386319,0.0242 -2.797069,-0.31145 -4.0898,-1.0463 -1.273206,-0.72374 -2.272292,-1.74391 -2.959816,-2.92442"
            id="path6842"
          />
          <path
            id="path6844"
            d="m -48.738954,146.31749 c 1.386319,0.0242 2.797053,-0.31145 4.0898,-1.0463 1.273206,-0.72374 2.272292,-1.74391 2.959799,-2.92442"
          />
          <path
            d="m -48.509347,154.32527 c 1.386319,-0.0243 2.797069,0.31144 4.0898,1.04629 1.273206,0.72375 2.272292,1.74391 2.959815,2.92442"
            id="path6846"
          />
          <path
            id="path6848"
            d="m -34.639739,154.32566 c -1.386319,-0.0243 -2.797069,0.31145 -4.0898,1.0463 -1.273206,0.72374 -2.272292,1.7439 -2.959816,2.92441"
          />
          <path
            d="m -34.639755,146.31802 c -0.71417,1.18846 -1.128804,2.57805 -1.13878,4.06503 -0.0098,1.46449 0.374124,2.8398 1.052722,4.02547"
            id="path6850"
          />
          <path
            id="path6852"
            d="m -48.595405,146.23477 c 0.71417,1.18846 1.128804,2.57805 1.138779,4.06503 0.0098,1.46449 -0.374123,2.8398 -1.052721,4.02547"
          />
          <path
            id="path6938"
            d="m -41.602756,142.43106 c -0.714153,-1.18846 -1.128803,-2.57805 -1.138779,-4.06503 -0.0098,-1.46449 0.374124,-2.8398 1.052722,-4.02547"
          />
          <path
            d="m -41.774887,142.43106 c 0.714169,-1.18846 1.12882,-2.57805 1.138796,-4.06503 0.0098,-1.46449 -0.374124,-2.8398 -1.052722,-4.02547"
            id="path6940"
          />
          <path
            d="m -41.373674,166.38648 c -0.71417,-1.18846 -1.128804,-2.57805 -1.13878,-4.06502 -0.0098,-1.4645 0.374124,-2.83981 1.052722,-4.02548"
            id="path6942"
          />
          <path
            id="path6944"
            d="m -41.545805,166.38648 c 0.714169,-1.18846 1.128819,-2.57805 1.138795,-4.06502 0.0098,-1.4645 -0.374124,-2.83981 -1.052722,-4.02548"
          />
          <path
            id="path6946"
            d="m -27.681562,158.36204 c -1.386319,0.0243 -2.797053,-0.31144 -4.0898,-1.04629 -1.273206,-0.72375 -2.272276,-1.74391 -2.9598,-2.92442"
          />
          <path
            d="m -27.76762,158.51111 c -0.672149,-1.21272 -1.668249,-2.2666 -2.951021,-3.01873 -1.263377,-0.74075 -2.646415,-1.0959 -4.012521,-1.10105"
            id="path6948"
          />
          <path
            id="path6950"
            d="m -27.76762,158.51111 c -0.672149,-1.21272 -1.668249,-2.2666 -2.951021,-3.01873 -1.263377,-0.74075 -2.646415,-1.0959 -4.012521,-1.10105"
          />
          <path
            d="m -55.558963,158.29598 c 1.386319,0.0243 2.797069,-0.31144 4.089816,-1.04629 1.27319,-0.72375 2.272276,-1.74391 2.9598,-2.92442"
            id="path6952"
          />
          <path
            d="m -55.472889,158.44505 c 0.672149,-1.21271 1.668249,-2.2666 2.951021,-3.01872 1.263377,-0.74075 2.646399,-1.0959 4.012521,-1.10106"
            id="path6954"
          />
          <path
            id="path6956"
            d="m -55.507559,142.38467 c 0.67215,1.21272 1.66825,2.2666 2.951022,3.01873 1.263377,0.74075 2.646399,1.0959 4.01252,1.10105"
          />
          <path
            id="path6958"
            d="m -55.593632,142.53374 c 1.386319,-0.0243 2.797069,0.31144 4.089816,1.04629 1.27319,0.72375 2.272276,1.74391 2.959799,2.92442"
          />
          <path
            d="m -27.590304,142.28079 c -0.672149,1.21272 -1.668249,2.26661 -2.951021,3.01873 -1.263378,0.74075 -2.646399,1.0959 -4.012521,1.10105"
            id="path6960"
          />
          <path
            d="m -27.50423,142.42986 c -1.386319,-0.0243 -2.797069,0.31144 -4.089817,1.04629 -1.273189,0.72375 -2.272275,1.74391 -2.959799,2.92442"
            id="path6962"
          />
        </animated.g>
        <g
          id="tree-right"
          filter="url(#filter5084)"
          fill="none"
          strokeWidth="0.635"
          strokeLinecap="round"
        >
          {treeRightTrail.map((styles, index) => (
            <animated.path
              {...treeRight[index]}
              key={treeRight[index].id}
              style={styles}
            />
          ))}
        </g>
      </g>
    </svg>
  )
}
