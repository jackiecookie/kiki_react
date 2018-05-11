import styled, {
    ThemedStyledFunction,
    StyledComponentClass
} from 'styled-components';

type ThemedStyledComponentFactories<T, Props> = {
    [TTag in keyof JSX.IntrinsicElements]: ThemedStyledFunction<
    JSX.IntrinsicElements[TTag] & Props,
    T
    >
};

interface ThemedBaseStyledInterface<T, Props>
    extends ThemedStyledComponentFactories<T, Props> {
    <P, TTag extends keyof JSX.IntrinsicElements>(
        tag: TTag
    ): ThemedStyledFunction<P & Props, T, P & JSX.IntrinsicElements[TTag]>;
    <P, O>(component: StyledComponentClass<P, T, O>): ThemedStyledFunction<
        P & Props,
        T,
        O
        >;
    <P extends { [prop: string]: any; theme?: T }>(
        component: React.ComponentType<P>
    ): ThemedStyledFunction<P & Props, T>;
}

type StypedFn = <P, T = {}>() => <G>(
    fn: (styled: ThemedBaseStyledInterface<T, P>) => G
) => G;

export const stypedFn: StypedFn = () => fn => fn(styled);
