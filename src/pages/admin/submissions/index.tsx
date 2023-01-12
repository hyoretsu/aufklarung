import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Styling, Switch, Submission, SwitchButton } from '@styles/admin/submissions';

const Submissions: React.FC = () => {
    const { push } = useRouter();

    const [filterOnQueue, setFilter] = useState(true);

    return (
        <>
            <NextSeo title="Submissões" />
            <Styling>
                <Switch>
                    <span>Fila</span>
                    <SwitchButton side="queue" active={filterOnQueue} onClick={() => setFilter(old => !old)} />
                    <SwitchButton side="approved" active={!filterOnQueue} onClick={() => setFilter(old => !old)} />
                    <span>Arquivo</span>
                </Switch>
                <div>
                    <Submission onClick={() => push('/admin/submissions/1')}>
                        <div>
                            <strong>Rodstein Rodrigues</strong>
                            <p>
                                Situação Limite do Analista: Uma crítica Sartreana a psicanálise em L'homme au
                                Magnétophone
                            </p>
                        </div>
                        <span>Na Fila</span>
                    </Submission>
                    <Submission>
                        <div>
                            <strong>Rodstein Rodrigues</strong>
                            <p>
                                Situação Limite do Analista: Uma crítica Sartreana a psicanálise em L'homme au
                                Magnétophone
                            </p>
                        </div>
                        <span>Na Fila</span>
                    </Submission>
                </div>
            </Styling>
        </>
    );
};

export default Submissions;
