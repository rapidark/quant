/*******************************************************************************
 * Copyright (c) 2013 Luigi Sgro. All rights reserved. This
 * program and the accompanying materials are made available under the terms of
 * the Eclipse Public License v1.0 which accompanies this distribution, and is
 * available at http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Luigi Sgro - initial API and implementation
 ******************************************************************************/
package dao;

import java.sql.SQLException;
import java.util.List;


public interface ICapitalPointDao extends IFlushable, IDbInitializable {
	void save(String stockDatabaseId, ICapitalPoint item) throws SQLException;
	void update(String stockDatabaseId, ICapitalPoint existingItem, ICapitalPoint newItem) throws SQLException;
	List<ICapitalPoint> find(String stockDatabaseId) throws SQLException;
	void deleteAll(String stockDatabaseId) throws SQLException;
}
