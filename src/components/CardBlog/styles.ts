import tw, { styled, css, theme } from 'twin.macro'

export const Container = styled.div(
  () => [tw`flex flex-row`],
  css`
    & {
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid ${theme`colors.dark.200`};
    }

    &:last-child {
      padding: 0;
      border-bottom: none;
    }
  `
)

export const WrapperImage = styled.div(() => [
  tw`w-56 overflow-hidden rounded-xl shadow-md`
])

export const WrapperInfo = styled.div(() => [tw`ml-6 space-y-4`])

export const Title = styled.h1(() => [
  tw`text-lg leading-tight font-medium text-dark-400 hover:underline`
])

export const Description = styled.p(() => [
  tw`text-sm leading-tight text-dark-300`
])
