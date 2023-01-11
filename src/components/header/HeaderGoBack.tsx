import React from 'react';
import Header, {HeaderIconGoBack, HeaderText} from '.';

type HeaderGoBackProps = {
  title: string;
};

const HeaderGoBack = (props: HeaderGoBackProps) => {
  const {title} = props;
  return (
    <Header
      leftComponent={<HeaderIconGoBack />}
      centerComponent={<HeaderText title={title} />}
    />
  );
};

export default HeaderGoBack;
