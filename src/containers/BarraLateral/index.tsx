import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard contador={1} legenda={'pendentes'} />
        <FiltroCard contador={2} legenda={'concluídas'} />
        <FiltroCard contador={3} legenda={'urgente'} />
        <FiltroCard contador={4} legenda={'importantes'} />
        <FiltroCard contador={5} legenda={'normal'} />
        <FiltroCard ativo contador={10} legenda={'todas'} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
