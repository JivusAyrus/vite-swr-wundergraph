import { useMutation } from '../../lib/wundergraph';
import { UsersUpdateInput } from '../../../components/generated/models';
import { useState } from 'react';

const UpdateUser = () => {
	const [state, setState] = useState<UsersUpdateInput>({
		id: '1',
		name: 'Jens',
		bio: 'Founder of WunderGraph',
	});
	const { data, trigger } = useMutation({
		operationName: 'users/update',
	});
	return (
		<div>
			<input value={state.id} onChange={(e) => setState((s) => ({ ...s, id: e.target.value }))}></input>
			<input value={state.name} onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}></input>
			<input value={state.bio} onChange={(e) => setState((s) => ({ ...s, bio: e.target.value }))}></input>
			<button onClick={() => trigger(state)}>Update</button>
			<pre>{JSON.stringify(data)}</pre>
		</div>
	);
};

export default UpdateUser;
