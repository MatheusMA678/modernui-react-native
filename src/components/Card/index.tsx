import { Dimensions } from 'react-native';
import { 
  Canvas, 
  RoundedRect, 
  LinearGradient, 
  Circle, 
  vec, 
  Group, 
  useFont, 
  Text, 
  TextPath, 
  Skia,
  Blur
} from '@shopify/react-native-skia';

import CairoFont from '../../assets/fonts/Cairo-Regular.ttf';
import { LoadIndicator } from '../LoadIndicator';

const width = Dimensions.get('window').width - 24;
const height = 200;

export function CreditCard() {
  const font = useFont(CairoFont, 16);
  const fontSmall = useFont(CairoFont, 12);

  const circle = Skia.Path.Make();
  circle.addCircle(width - 40, -10, 50);

  if(font === null){
    return <LoadIndicator />
  }
  if(fontSmall === null){
    return <LoadIndicator />
  }

  return (
    <Canvas style={{ margin: 12, height, width }}>
      <RoundedRect x={0} y={0} width={width} height={height} r={10}>
        <LinearGradient 
          start={vec(0, 0)}
          end={vec(256, 256)}
          colors={['#222', '#333', '#444', '#222']}
        />
      </RoundedRect>

      <Group blendMode={'overlay'}>
        <Circle cx={width - 60} cy={40} r={20} color={'#eb001b'} />
        <Circle cx={width - 40} cy={40} r={20} color={'#f79f1b'} />
      </Group>

      <Text
        x={20} 
        y={50}  
        font={font} 
        color={'#fff'}
        text={'Matheus Mattos Avelino'}
        />

      <Text
        x={20} 
        y={height - 90}  
        font={font} 
        color={'#fff'}
        text={'1234 5678 9012 3456'}
        />

      <Text
        x={20} 
        y={height - 30}  
        font={fontSmall} 
        color={'#fff'}
        text={'11/2027'}
      />

      <Text
        x={width - 60} 
        y={height - 30}  
        font={fontSmall} 
        color={'#fff'}
        text={'000'}
      />

      <TextPath 
        text={'Cartão de crédito virtual'}
        font={font}
        path={circle}
        color={'#fff'}
        opacity={0.3}
      >
        <Blur blur={1} />
      </TextPath>
    </Canvas>
  );
}