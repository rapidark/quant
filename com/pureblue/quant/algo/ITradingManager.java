/*******************************************************************************
 * Copyright (c) 2013 Luigi Sgro. All rights reserved. This
 * program and the accompanying materials are made available under the terms of
 * the Eclipse Public License v1.0 which accompanies this distribution, and is
 * available at http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Luigi Sgro - initial API and implementation
 ******************************************************************************/
package com.pureblue.quant.algo;

import com.pureblue.quant.model.IPrettyNamed;

/**
 * Main interface to deal with creation, configuration, input binding and execution of trading algorithms
 * @see ITradingHierarchyManager
 * @see ITradingFactoryManager
 * @see ITradingAgentConfigurationManager
 * @see ITradingAgentBindingManager
 * @see ITradingAgentExecutionManager
 */
public interface ITradingManager extends ITradingHierarchyManager, ITradingFactoryManager, ITradingAgentConfigurationManager, ITradingAgentBindingManager, ITradingAgentExecutionManager, IPrettyNamed {
}
