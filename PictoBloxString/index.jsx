import React from 'react';
import { FormattedMessage } from 'react-intl';
import Blocks from '../../../components/blocks/blocks.jsx';

const PictoBloxString = () => (
    <Blocks>
        <Block type="text_indexOf">
            <Value name="VALUE">
                <Shadow type="text">
                    <Field name="TEXT">hello world</Field>
                </Shadow>
            </Value>
            <Value name="FIND">
                <Shadow type="text">
                    <Field name="TEXT">world</Field>
                </Shadow>
            </Value>
        </Block>
        <Block type="text_equalsIgnoreCase">
            <Value name="TEXT1">
                <Shadow type="text">
                    <Field name="TEXT">hello world</Field>
                </Shadow>
            </Value>
            <Value name="TEXT2">
                <Shadow type="text">
                    <Field name="TEXT">Hello World</Field>
                </Shadow>
            </Value>
        </Block>
    </Blocks>
);

export default PictoBloxString;